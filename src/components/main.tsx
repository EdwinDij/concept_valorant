import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Main() {
const [champions, setChampions] = useState<any>([])
const [champData, setChampData] = useState<any>([])
const [champId, setChampId] = useState<any>([])

    useEffect(() => {
        const getAgent = () => {
            axios.get(`http://ddragon.leagueoflegends.com/cdn/12.16.1/data/fr_FR/champion.json`)
                .then(res => {
                    const champ = res.data.data
                    console.log(champ)
                    const results:any = Object.entries(champ)
                    setChampData(results)
                })
        }
        getAgent()
    }, [])


let champDataMap:any = new Map(champData)
//console.log(champDataMap[0].key)
let champDataMapKeys:any = champDataMap.keys()
//console.log(champDataMapKeys.value)
let champDataMapValues:any = champDataMap.values()
//console.log(champDataMapValues)
let champDataMap_array:any = [...champDataMapValues]
//console.log(champDataMap_array)

const urlImg:any = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'


return (
        <div className='main'>
            <div className="container-card">
            {champDataMap_array.map((lolChamp:any, key:string) => {
                return <div className='card' key={lolChamp.id}>
                    <img className="card-img"src={urlImg + lolChamp.id + '_0.jpg'} alt="" />
                    <p className='champ-name'>{lolChamp.name}</p>
                </div>
            })}
            </div>
        </div>

    )
}
