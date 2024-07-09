import React from 'react'
import memesdata from '../memesdata';



function Meme() {
    const [memeImage, setMemeImage]= React.useState("");


    function getMemeImage(){
        const memesArray=memesdata.data.memes
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }



  return (
    <main>
        <div className='form'>
            <input
                type="text"
                placeholder='top-text'
                className='form-input'
            >
            </input>
            
            <input
                type="text"
                placeholder='bottom-text'
                className='form-input'
            >
            </input>

           

            <button 
                className='form-button'
                onClick={getMemeImage}
            >
                Get a new image
            </button>


           
        </div>
        <img src={memeImage} className='meme-image'/>
    </main>
  )
}


export default  Meme;
