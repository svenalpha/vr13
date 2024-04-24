import useHelmet from '@hooks/useHelmet';
import React, { useEffect, useState } from 'react';
import axios from "axios"


const Contact: React.FC<ContactProps> = (props) => {
    const [legend, setLegend] = useState("  here is useState original legend");
    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle("Contact")
    }, [helmet])

    useEffect(() => {
        axios.get('/api/proxy1').then((response) => {         
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                       }
                                        )               
                    }, [])


    return (
        <>
            <h1>Contact Page</h1>
            <p>{legend}</p>
        </>
    )
}

interface ContactProps {
    [key: string]: any
}

export default Contact