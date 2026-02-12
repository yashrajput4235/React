/*
For dynamiic routing we have to create a new component for each dynamic route.
*/
/*
useParams is used to get the parameters from the URL.
*/
/*
useLocation is used to get the location of the URL.
*/
/*
useNavigate is used to navigate to different routes.     
*/
import React from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'

function Dynamic_routing() {
    /*
    useParams is used to get the parameters from the URL.
    */
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div>
        <h1>Dynamic Routing Page</h1>
        <p>Product ID: {id}</p>
        <p>Location: {location.pathname}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Dynamic_routing