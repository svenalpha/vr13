import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import api from './server/app.js';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const isTest = process.env.VITEST;
const isProd = process.env.NODE_ENV === 'production'
const root: string = process.cwd();

const resolve = (_path: string) => path.resolve(__dirname, _path);

const indexProd: string = isProd
    ? fs.readFileSync(resolve('client/index.html'), 'utf-8')
    : ''

const createServer = async () => {

    const app = express();  

    app.get("/rrr/v9",(req,res) => {
       res.send("using /rrr  : hello world !!!!");
                                   }
           );
  
    app.get("/api/proxy1",(req,res) => {            
       res.send("using proxy1  : hello world 2!!!!");           
                                   }                    
           );                         
       





    let vite: any;

    if (!isProd) {
        vite = await (await import('vite')).createServer({
            root,
            logLevel: isTest ? 'error' : 'info',
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100
                }
            },
            appType: "custom"
        })

        app.use(vite.middlewares)
    }

    if (isProd) {
        app.use((await import('compression')).default())

        app.use(
            (await import('serve-static')).default(resolve('./client'), {
                index: false
            })
        )
    }

    // api routes
    app.use('/rrr', api.router)

    app.use('*', async (req, res) => {
        try {

            const url = req.originalUrl;

            let template, render;

            if (!isProd) {
                template = fs.readFileSync(resolve('index.html'), 'utf8')
                template = await vite.transformIndexHtml(url, template)

                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).default.render;
            }

            if (isProd) {
                template = indexProd;

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                render = (await import('../entry/entry-server.js')).default.render;
            }

            const context: any = {};
            const appHtml = await render(req)
            const { helmet } = appHtml;
            
            if (context.url) return res.redirect(301, context.url);

            let html = template.replace('<!--app-html-->', appHtml.html)
            
            const helmetData = `
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.style.toString()}
            `
            
            html = html.replace('<!--app-head-->', helmetData)
            html = html.replace('<!--app-scripts-->', helmet.script.toString())

            res.status(200).set({ "Content-Type": "text/html" }).end(html)

        } catch (e: any) {
            !isProd && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })




    return { app, vite }
}


if (!isTest) {
    createServer().then(({ app }) => {

///////////////////////////////////////////////////////////////
app.use(express.static('dist/app/server')); // see https://www.youtube.com/watch?v=N4yUiQiTvwU  React Proxy | Easiest Fix to Cors Errors    
////////////////////////////////////////////////////////////////



        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
        })
    })
}

//    createServer().then(({ app }) => {
//        //app.listen(process.env.PORT || 5000, () => {
//        app.listen(5000, () => {    
//            console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
//        })
//    })


