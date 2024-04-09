import React, { useEffect, useState } from 'react';
import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import { useLoaderData } from 'react-router-dom';
import useHelmet from '@hooks/useHelmet';
import axios from "axios"
import styles from './Home.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FC<HomeProps> = (_props) => {
    const [legend, setLegend] = useState("  here is useState original legend");
    const [count, setCount] = useState(0)
    const data = useLoaderData()

    const helmet = useHelmet()

    useEffect(() => {
        helmet.setTitle(`Home Page - Vite SSR + React`)
    }, [helmet])

    useEffect(() => {
        axios.get('/api/tsmessage').then((response) => {         
        //console.log(" useEffect, response data = ",response.data)    
         setLegend(response.data);
                                                       }
                                        )               
                    }, [])





    return (
        <>
            <div>
                <h4>version      03      17:27        09/04/2024   </h4>
                <p>{legend}</p>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.react} alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

interface HomeProps {
    [key: string]: any
}

export default Home;