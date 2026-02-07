import React from 'react'
import Phone_prices from '../components/Phone_prices'
import Model from '../components/Model'
import './App.css'
/*In React, props (short for "properties") are how components talk to each other, 
acting as inputs that you pass to a component to make it dynamic and reusable.
*/


function App() {

  return (
    <>
      <Phone_prices name="iPhone" price="1000" />
      <Phone_prices name="Samsung" price="2000" />
      <Phone_prices name="Xiaomi" price="3000" />
      <Model Name="Yash" SkinTone="Fair" Beautiful="Yes" />
      <Model Name="Yash" SkinTone="Fair" Beautiful="Yes" />
      <Model Name="Yash" SkinTone="Fair" Beautiful="Yes" />
    </>
  )
}


export default App
