import React, { useEffect, useState } from 'react'
import phoenix from './assets/Phoenix.png'
import jett from './assets/Jett.png'
import sova from './assets/Sova.png'
import sage from './assets/Sage.png'
import axios from 'axios'

export default function Main() {
const [champions, setChampions] = useState<any>([])
const [champData, setChampData] = useState<any>([])
    useEffect(() => {
        const getAgent = () => {
            axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/fr_FR/champion.json`)
                .then(res => {
                    //console.log(res.data)
                    const champ = res.data.data
                    const results:any = Object.entries(champ)
                    //console.log(results)
                    setChampData(results)
                })
        }
        getAgent()
    }, [])

let champDataMap = new Map(champData)

let champDataMapKeys:any = champDataMap.keys()
let champDataMapValues:any = champDataMap.values()
let champDataMap_array = [...champDataMapValues,]
console.log(champDataMap_array)

    return (
        <div className='main'>

        </div>

    )
}
