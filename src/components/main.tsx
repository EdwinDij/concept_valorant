import React, { useEffect, useState } from 'react'
import phoenix from './assets/Phoenix.png'
import jett from './assets/Jett.png'
import sova from './assets/Sova.png'
import sage from './assets/Sage.png'
import axios from 'axios'

export default function Main() {
const [champions, setChampions] = useState<any>([])

    useEffect(() => {
        const getAgent = () => {
            axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/fr_FR/champion.json`)
                .then(res => {
                    //console.log(res.data)
                    const champ = res.data.data
                    const results = Object.keys(champ).map((key) =>[champ[key]])
                    console.log(results)
                    console.log(results[0])

                })
        }
        getAgent()
    }, [])

    return (
        <div className='main'>
            <div className="main-wrapper">
                <div className="vertical-text">
                    <p className='agents'>Agents</p>
                </div>

                    {champions.map ((championslol:any, key:any) => {
                        return <div className="card-agents">
                        <div className="card-agents-text">
                            <p className='card-agents-text-city'>United Kingdom</p>
                            <p className='card-agents-text-name'>{championslol.name} </p>
                        </div>
                        <div className="card-agents-wrapper">
                            <img className='card-agents-image' src={championslol.assetName} alt="phoenix" />
                        </div>
                    </div>
                    })}
                    
            </div>
        </div>

    )
}
