import React from 'react'
import Sunny from './Sunny'

const Person = () => {
    const name = "spiderman";
    const age = 21;
    const city = "new york";
    const person = {
        name: "Yash",
        age: 21,
        city: "Ahmedabad"
    };
  return (
    <>
    <h1>Name: {name}</h1>
    <h2>Age: {age}</h2>
    <h3>City: {city}</h3>
    <h4>Name: {person.name}</h4>
    <h5>Age: {person.age}</h5>
    <h6>City: {person.city}</h6>
    <Sunny />
    </>
  )
}

export default Person;