import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='haederTitles'>
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>

        </div>
        <img className='headerImg' 
        src='https://images.wallpaperscraft.com/image/single/mountains_forest_trees_119511_1920x1080.jpg' alt=''/>

    </div>
  )
}
