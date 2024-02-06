import "./WallpaperStyles.css"

import lamp from "../assets/test.jpg"

import React from 'react'

const Wallpaper = () => {
  return (
    <div className="wall">
        <div className="image-box">
            <img className="image" src={lamp}></img>
        </div>
        <div className="content">
            <p>Ich bin Alper Sütcü</p>
            <h1>Herzlich Willkommen</h1>
        </div>
    </div>
  )
}

export default Wallpaper