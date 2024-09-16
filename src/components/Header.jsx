import React from 'react'
import img from '../assets/LogoDark.png';

export default function Header() {



  return (
    <div class="header">
        <div class="logo">
            <img src={img} alt='logo'/>
        </div>
        <div class='Search'>
            
            <input type='text' class="searchBar" placeholder='Search'/>
            <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            
        </div>

    </div>
  )
}
