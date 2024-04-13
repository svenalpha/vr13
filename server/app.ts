import express, { Router } from 'express';
class App {

    public router: Router = express.Router();

    constructor() {
        this.router.get('/api/v1/proxy2', (req, res) => {
            res.send("/api/v1/proxy2 in server/app.ts")
                                                 })    


        this.router.get('/', (req, res) => {
            res.send("Welcomeeee I!")
        })

        this.router.get('/tsmessage', (req, res) => {
            res.send("rrr/tsmessage:  the fetched message   ")
        })
        this.router.get('/folks', (req, res) => {
            res.status(200).json([    
               {name:"Billy",star:"aquarius"
               }, 
               {name:"Fred",star:"pisces"
               }    
            ])
        })



    }
}

const api = new App()

export default api;