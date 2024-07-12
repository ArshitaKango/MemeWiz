import React from 'react'
import memesData from '../memesdata';



function Meme() {


    const [meme, setMeme]= React.useState({
        topText : "",
        bottomText : "",
        randomImage :"https://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes]= React.useState([]);


    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])


    function getMemeImage(){
        // const memesArray=allMemes.data.memes
        const randomNumber=Math.floor(Math.random()*allMemes.length)

        const url=allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
        
    }



    function handleChange(event){
        const {name,value}=event.target

        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }



  return (
    <main>
        <div className='form'>
            <input
                type="text"
                placeholder='top-text'
                className='form-input'
                name='topText'
                value={meme.topText}
                onChange={handleChange}
            >
            </input>
            
            <input
                type="text"
                placeholder='bottom-text'
                className='form-input'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
            >
            </input>

           

            <button 
                className='form-button'
                onClick={getMemeImage}
            >
                Get a new image
            </button>

        </div>
            
        <div className='meme'>
            <img src={meme.randomImage} className='meme-image'/>
            <h2 className='memeTopText'>{meme.topText}</h2>
            <h2  className='memeBottomText' >{meme.bottomText}</h2>
        </div>
        
    </main>
  )
}


export default  Meme;
