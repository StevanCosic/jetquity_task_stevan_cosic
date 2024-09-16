import React from 'react'

export default function NavMenuItem(props) {

    const {icon,lable} = props

  return (
    <>
    <div class="menuitem"><div class='Icon'>{icon}</div> <p class="menuText">{lable}</p></div>
    
    </>
  )
}
