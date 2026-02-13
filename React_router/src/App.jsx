/*
What is react router?

React Router is a standard library for routing in React applications. 
It allows you to create single-page applications (SPAs) with multiple views or pages without requiring a full page reload. 
It uses client-side routing to map different URLs to different components, providing a seamless user experience.
 
what is dynamic routing?
Dynamic routing means creating routes (URLs) that change based on some value, instead of being fixed.

Simple real-life example 🚪

Imagine a hotel:

Room 101 → /room/101

Room 102 → /room/102

Room 103 → /room/103

You don’t create a separate door design for every room.
Instead, you create one flexible door that works for all room numbers.

That flexible door = dynamic routing




*/


import React   from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Product from './pages/Product'
import './App.css'
import Dynamic_routing from './pages/Dynamic_routing'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>        
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />        
        <Route path="/product/:id" element={<Dynamic_routing/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
