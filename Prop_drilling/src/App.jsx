/*
What is prop drilling?

Prop drilling is a term used in React to describe the process of passing data 
from a parent component to a child component through multiple 
levels of intermediate components.

*/
/*
What is context api?

Context API is a React feature that allows you to share data between components 
without having to pass props down through multiple levels of components.

*/


import React from 'react'
import IndianGov from './Home/IndianGov'
import './App.css'

function App() {
  const money = 1000;

  return (
    <>
      <IndianGov/>
    </>
  )
}

export default App
