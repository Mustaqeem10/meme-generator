import React from 'react';
import Meme from '../images/Troll Face.png'
import "../style.css"

export default function Header() {
    return (
        <header>
            <img className='head-image' src={Meme} alt="meme-face"></img>
            <h2 className='head-title'>Meme Generator</h2>
            <h4 className='head-project'>React Course - Project 3</h4>
        </header>
    )
}