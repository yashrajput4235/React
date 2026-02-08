/*Hooks are special functions that React provides to add state and other React features to functional components. 

*/
/* The normal variables in react are not persistent, meaning they are not stored when the component is re-rendered. 
these value not change in ui so to overcome this problem we use hooks.
*/
/* There are two types of hooks: 
1. Built-in hooks
2. Custom hooks
*/
/* Built-in hooks are provided by React and are used to add state and other React features to functional components. 

*/
/* Custom hooks are user-defined hooks that are used to add state and other React features to functional components. 

*/
/* Rules of hooks: 
1. Hooks must be called at the top level of a functional component. 
2. Hooks must be called in the same order in every render. 
3. Hooks must be called only from React functions. 
*/
/*  Commonly used hooks are: 
1. useState
2. useEffect
3. useContext
4. useReducer
5. useRef
6. useMemo
7. useCallback
*/  
/* useState is a hook that is used to add state to functional components. 

*/
/* useState is a function that returns an array of two values: 
1. The current state value
2. A function to update the state value
*/
/* Example of useState: 
    const [state, setState] = useState(initialState);
    state here is the variable_name
    setState here is the function_name
    initialState here is the initial value of the variable
    if we are taking that variable whose value change so we can not declare that variable in normal way.
    we have to use useState to declare that variable.

*/
/* Example of useState: 
    const [count, setCount] = useState(0);
    count here is the variable_name
    setCount here is the function_name
    initialState here is the initial value of the variable
    if we are taking that variable whose value change so we can not declare that variable in normal way.
    we have to use useState to declare that variable.

*/
import React from 'react'
import {useState} from 'react';
function Hooks() {
    console.log("Hooks rendered");
    const [count, setCount] = useState(0);
    
  return (
    <div className="hooks-container">
        <div className="card">
            <h1 className="title">React Hooks Counter</h1>
            <div className="counter-display">
                <span className="count">{count}</span>
            </div>
            <button className="increment-btn" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button className="decrement-btn" onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    </div>
  ) 
}

export default Hooks
