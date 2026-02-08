/* This is the Events component */
/*What is event in react?*/
/*Event is a user action that can be handled by the component*/
/*Event is a user action that can be handled by the component*/
/*Event is a user action that can be handled by the component*/
/*Event is a user action that can be handled by the component*/
/*Example of events in react*/
import React from 'react'

function Events() {
    console.log("Events component rendered");
    // for creating events it is neccessary to create the functions
    const handleClick=()=>{
        alert("Button clicked");
    }
    // for passing arguments/ parameter in the function we have to use arrow function
    const addition=(a,b)=>{
        alert(a+b);
    }
  return (
    <div>
        <h1>We are learning events in react</h1>
        <button onClick={handleClick}>Click me</button>
        {/* when parameter has call in callback if not do callaback it execute automatically */}
        <button onClick={()=>addition(10,20)}>Add 10 and 20</button>
    </div>
  )
}

export default Events