import React from 'react'
import './App.css';


export const App = () => {
  const name = "Yash";
  const person = {
    name: "Yash",
    age: 21,
    city: "Ahmedabad"
  };
  return ( // using fragwnt i can return multiple elements
    <>
    <div>
      <h1>Hello</h1>

      {/* The things we write inside the curly brackets is JavaScript */}
      <h1>2+4</h1>
      <h1>{2 + 4}</h1>
      <h1>name:{name}</h1>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.city}</h1>
    </div>
    </>
  )
};
