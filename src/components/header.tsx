import React from 'react'
import logoRiot from './assets/logoRiot.png';
import logoValorant from './assets/logoValorant.png';
import bar from './assets/Rectangle 128bar.png';

export default function header() {
  return (
    <div className='header'>
        <div className="header-wrapper">
            <div className="header-logo">
                <img src={logoRiot} alt="logoRiot" className='riotGames'/>
                <img src={bar} alt="bar" className='bar'/>
                <img src={logoValorant} alt="logoValorant" className='valorant riotGames'/>
            </div>
            <nav className='header-nav'>
                <ul>
                    <li>Game</li>
                    <li>Champions</li>
                    <li>News</li>
                    <li>Patch notes</li>
                    <li>Discover</li>
                    <li>Esports</li>
                    <li>Universe</li>
                    <li>Shop</li>
                    <li>Support</li>
                </ul>
                <p>Player1</p>
            </nav>

        </div>
    </div>
  )
}
