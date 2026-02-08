import React from 'react'
// import './App.css'
import Events from '../components/Events'
function App() {
  console.log("App component rendered");


  return (
    <div style={{ backgroundColor: 'red', padding: '20px', border: '5px solid black', color: 'white' }}>
      <h1>Test App Rendering</h1>
      <Events />
    </div>
  )
}

export default App
