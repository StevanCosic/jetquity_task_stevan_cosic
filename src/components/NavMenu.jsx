import React from 'react'
import NavMenuItem from './NavMenuItem'



export default function NavMenu() {
  return (
    <div class='NavMenu'>
        <NavMenuItem icon={[<i class="fa-solid fa-house"></i>]} lable='Dashboard' />
        <NavMenuItem icon={[<i class="fa-solid fa-wave-square"></i>]} lable='Recent Activity' />
        <NavMenuItem icon={[<i class="fa-solid fa-percent"></i>]} lable='Price Change' />
        <NavMenuItem icon={[<i class="fa-solid fa-gear"></i>]} lable='Settings' />
        
    </div>
  )
}
