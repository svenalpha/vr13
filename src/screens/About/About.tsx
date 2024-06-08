import useHelmet from '@hooks/useHelmet';
import React, { useEffect , useState} from 'react';
import axios from "axios";

const About: React.FC<AboutProps> = (props) => {
    //const [datax,setDatax] = useState(); 
    //const [users,setUsers] = useState([]);  
    const [legend,setLegend] = useState();  
    const [folksArray,setFolksArray] = useState([]); 
    const [usersArray,setUsersArray] = useState([]);
    //const url = "/rrr/peopleapi";  

    const helmet = useHelmet();

    async function  doGetDatax()
        {


        
        //    axios.get('/rrr/peopleapi').then((response) => {    // "/api"     
        //    //console.log(" useEffect, response data = ",response.data)    
        //     setUsers(response.data);
        //     console.log("users = ",users);
        //                                                  }
        //                                    )               
            
        axios.get('/rrr/users').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setUsersArray(response.data);
            console.log("userArray = ",usersArray);
                                                   }
                                    )          

 
        axios.get('/rrr/folks').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setFolksArray(response.data);
            console.log("folksArray = ",folksArray);
                                                   }
                                    )          



            axios.get('/rrr/tsmessage').then((response) => {    // "/api"     
            //console.log(" useEffect, response data = ",response.data)    
            setLegend(response.data);
                                                            }
                                            )     


        }   //       async function  doGetDatax()
        useEffect(() => {doGetDatax()},[]);

    
    useEffect(() => {
        helmet.setTitle("About")
    },[helmet])

    return (
        <>
            <h1>About Us</h1>
            <p>{legend}</p>
           
            <div>
            {
            folksArray.map(folk => (
                                    <div key={folk["id"]}> 
                                       <h6>{folk['name']}      {folk['star']}</h6>
                                     </div>  
                              )         
                      )                 

              }
         </div> 

         <div>
            {
            usersArray.map(user => (
                                    <div key={user["id"]}> 
                                       <h6>{user['username']}      {user['city']}</h6>
                                     </div>  
                              )         
                      )                 

              }
         </div> 







            <p>qwwwertyuiogggggghhjhhjjkkll</p>
        </>
    )
}

interface AboutProps {
    [key: string]: any
}

export default About;