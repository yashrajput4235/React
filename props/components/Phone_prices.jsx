import React from 'react'
import Model from './Model'

function Phone_prices(props) {
  return (
    <>
    <p>Phone Name: {props.name}</p>
    <p>Phone Price: {props.price}</p>
    <Model />
    </>
  )
}

export default Phone_prices
// Now for using props we have to write props.name and props.price so there is a way to destructure the props
// We can destructure the props in the function parameters
// function Phone_prices({name, price}) {
//   return (
//     <>
//     <p>Phone Name: {name}</p>
//     <p>Phone Price: {price}</p>
//     </>
//   )
// }
// This is the best way to use props
// see in Model.jsx file for more information
