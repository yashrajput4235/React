import React from 'react'
// when wrap up in   main.jsx then we wrap up with state
// and use useContext hook to get the value of money
import { useContext } from 'react'
import MoneyContext from '../context/MoneyContext'
const People = () => {
    const data = useContext(MoneyContext);
  return (  
    <div>
        <h1>This is people component</h1>
        <p>Money received: {data.money}</p>
    </div>  
  )
}

export default People