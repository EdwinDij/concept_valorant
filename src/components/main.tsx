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
                    //const results:any = Object.entries(champ)
                    setChampions(champ)
                    //console.log(champions)
                
                })
        }
        getAgent()
    }, [])

const results:any = Object.entries(champions)
console.log(results)

    return (
        <div className='main'>

        </div>

    )
}
