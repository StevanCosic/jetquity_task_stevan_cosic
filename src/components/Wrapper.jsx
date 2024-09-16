import React from 'react'

export default function Wrapper(props) {
    const {children} = props
  return (
    <div class="wrapper">
        {children}
        </div>
  )
}
