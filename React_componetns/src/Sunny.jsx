import React from 'react'

function Sunny() {
    const person = {
        name: "Sunny Leone",
        job: "Actress",
        city: "Mumbai"
    };
  return (
    <>
    <h1>Name: {person.name}</h1>
    <h2>Job: {person.job}</h2>
    <h3>City: {person.city}</h3>
    </>
  )
}

export default Sunny;