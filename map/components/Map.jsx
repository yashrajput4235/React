/*map is high order function which is used to iterate over an array and return a new array 
with the same length as the original array. 

*/

import React from 'react'

function Map() {
    const products = [
        {id: 1, name: "Apple", price: 10, emoji: "🍎"},
        {id: 2, name: "Banana", price: 20, emoji: "🍌"},
        {id: 3, name: "Orange", price: 30, emoji: "🍊"},
        {id: 4, name: "Mango", price: 40, emoji: "🥭"},
    ]
  return (
    <div className="map-container">
        <h1 className="page-title">Product List</h1>
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="product-emoji">{product.emoji}</div>
                    <div className="product-info">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Map