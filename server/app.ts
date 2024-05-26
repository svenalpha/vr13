import express, { Router } from 'express';
import  people  from "./db/people.js";
//import   people   from  "@db/people";


class App {

    public router: Router = express.Router();

    constructor() {

        //const ppp = people;
        this.router.get('/peopleapi', (req, res) => { 
        res.status(200).json([people    
                             ])                     }               
                       )                                           


        this.router.get('/proxy2', (req, res) => {
            res.send("/rrr/proxy2 in server/app.ts")
                                                 }
                       )    


        this.router.get('/', (req, res) => {
            res.send("Welcomeeee I!")
                                           }
                       )                    

        this.router.get('/tsmessage', (req, res) => {
            res.send("in server/app.ts rrr/tsmessage:  this message has been -- fetched --  ")
                                                    }
                       )              

        this.router.get('/folks', (req, res) => {
            res.status(200).json([    
               {name:"Billy",star:"aquarius"
               }, 
               {name:"Fred",star:"pisces"
               }    
                                 ])
                                                }
                       )                          

                  }   // end constructor    
}    //  end class App

const api = new App()

export default api;