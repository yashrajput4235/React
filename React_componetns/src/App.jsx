import React from 'react'
import './App.css'
// components are the building blocks of a react application
// components are reusable
// components are independent
// components are composable
//Types of components
//1. Class components
//2. Functional components
//Functional components are the most common type of components in react
//Functional components are functions that return JSX
//In react every file is component
//the component file name first letter should be capital
// creating component Person.jsx

import Person from './Person'

function App() {
    

  return (
    <>
      <Person />{/* The way of calling component is same as calling a function */}
    </>
  )
}

export default App
