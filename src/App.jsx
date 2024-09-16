import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import NavMenu from './components/NavMenu'
import CarCard from './components/CarCard'


function App() {


  return (

    <Wrapper>
      <Header/>
      <NavMenu/>
      <div class="cardHolder">
      <CarCard/>
      <CarCard/>
      <CarCard/>

      </div>
     

    </Wrapper>
    
       

    
     



    
    
      
    
  )
}

export default App
