import React from 'react'
import img from '../assets/CarAssets/Pcar.png'
import logo from '../assets/CarAssets/Plogo.png'
import carDoor from '../assets/Icons/CarDoor.svg'
import people from '../assets/Icons/People.svg'
import gear from '../assets/Icons/Shift.svg'
import fule from '../assets/Icons/Gas.svg'
import Linechart from './Linechart'

export default function CarCard() {
  return (
   <div class="CardCar">
        <div class="imgHolder">
            <img src={img} alt='Car driving on highway' class="thumbnailCar" />
        </div>
        <div class="CarInfo">
            <div class="nameLogo"><img src={logo} class="CarLogo"/><h2>Porsche Panamera </h2><p>2012</p></div>
            <div class="specification">
                <div class="singleSpecification"><img class='specificationIcon' src={carDoor}/><p>4 Doors</p></div>
                <div class="singleSpecification"><img class='specificationIcon' src={people}/><p>4 People</p></div>
                <div class="singleSpecification"><img class='specificationIcon' src={gear}/><p>Manual</p></div>
                <div class="singleSpecification"><img class='specificationIcon' src={fule}/><p>Gasoline</p></div>
            </div>
            <div class="price">
                <div class='singlePrice'>
                    <p>Original Price</p>
                    <h3>$60,000</h3>
                </div>
                <div class='singlePrice'>
                    <p>Original Price</p>
                    <h3>$60,000</h3>
                </div>
            </div>

            
        </div>
        <div class="graph"><Linechart/></div>
   </div>
  )
}
