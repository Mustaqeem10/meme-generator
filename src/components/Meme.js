import React, {useState, useEffect} from 'react';
import "../style.css"


export default function Meme() {

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
   
    const [memeData, setMemeData] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemeData((prevMeme) => ({
                ...prevMeme,
                randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeData((prevData) => {
            return (
                {
                    ...prevData,
                    [name]: value
                }
            )
        })
    }
    
    return (
        <>
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" name='topText'
                    value={memeData.topText}
                    onChange={handleChange}
                />
                <input type="text" placeholder="Bottom Text" name='bottomText'
                    value={memeData.bottomText}
                    onChange={handleChange}/>
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
        </main>
        <div className='meme-container'>
        {memeData.randomImage !== "" && <><img className="meme-image" src={memeData.randomImage} alt="meme"/>
            <h2 className='meme-text top'>{memeData.topText}</h2>
            <h2 className='meme-text bottom'>{memeData.bottomText}</h2>
            </>
        }
        </div>
        </>
    )    
}