import express, { Router } from 'express';
class App {

    public router: Router = express.Router();

    constructor() {
        //this.router.get('/api/v1', (req, res) => {
        //    res.send("/api/v1  Welcomeeee to the API!")
        //                                         })    


        this.router.get('/', (req, res) => {
            res.send("Welcomeeee to the API!")
        })

        this.router.get('/tsmessage', (req, res) => {
            res.send("the fetched message, tsmessage of API in extra message")
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