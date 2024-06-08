import express from 'express';
import users from "./db/Users.js";
//import   people   from  "@db/people";
class App {
    router = express.Router();
    constructor() {
        //   //const ppp = people;
        this.router.get('/users', (req, res) => {
            res.status(200).json(users);
        });
        this.router.get('/proxy2', (req, res) => {
            res.send("/rrr/proxy2 in server/app.ts");
        });
        this.router.get('/', (req, res) => {
            res.send("Welcomeeee I!");
        });
        this.router.get('/tsmessage', (req, res) => {
            res.send("in server/app.ts rrr/tsmessage:  this message has been -- fetched --  ");
        });
        this.router.get('/folks', (req, res) => {
            res.status(200).json([
                { id: 0, name: "Billy", star: "aquarius"
                },
                { id: 1, name: "Fred", star: "pisces"
                }
            ]);
        });
    } // end constructor    
} //  end class App
const api = new App();
export default api;
