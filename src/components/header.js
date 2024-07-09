import React from 'react'
import  "../images/troll-face.png";

function Header() {
  return (
    <header className='header'>
        <img className='header-image' src="../images/troll-face.png" />
        <h2 className='header-title'>Meme Generator</h2>

        <h4 className='header-project'>Create Your Own Memes</h4>
      

    </header>
  )
}

export default Header;
