import React from 'react'
import {Link} from 'react-router-dom'
/*
Link is used to navigate to different routes.
use dollar sign beacuse its value change again and again
*/

function Product() {
    const arr=[
        {
            id:1,
            name:"Product 1",
            price:100
        },
        {
            id:2,
            name:"Product 2",
            price:200
        },
        {
            id:3,
            name:"Product 3",
            price:300
        }
    ]
  return (
    <div>
        <ul>
            {arr.map((item) => (
                <div key={item.id}>
                    <li><Link to={`/product/${item.id}`}>{item.name}</Link></li>
                  
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Product