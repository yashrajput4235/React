import React, { useState } from 'react'
import '../src/App.css'

function Filter() {
    const products = [
        {id: 1, name: "Apple", price: 10, emoji: "🍎"},
        {id: 2, name: "Banana", price: 20, emoji: "🍌"},
        {id: 3, name: "Orange", price: 30, emoji: "🍊"},
        {id: 4, name: "Mango", price: 40, emoji: "🥭"},
        {id: 5, name: "Grapes", price: 25, emoji: "🍇"},
        {id: 6, name: "Pineapple", price: 45, emoji: "🍍"},
    ]

    const [filterType, setFilterType] = useState('all');

    const filteredProducts = products.filter(product => {
        if (filterType === 'all') return true;
        if (filterType === 'cheap') return product.price <= 25;
        if (filterType === 'expensive') return product.price > 25;
        return true;
    });

  return (
    <div className="map-container">
        <h1 className="page-title">Filter Products</h1>
        
        <div className="filter-controls">
            <button 
                className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
            >
                All Products
            </button>
            <button 
                className={`filter-btn ${filterType === 'cheap' ? 'active' : ''}`}
                onClick={() => setFilterType('cheap')}
            >
                Under $25
            </button>
            <button 
                className={`filter-btn ${filterType === 'expensive' ? 'active' : ''}`}
                onClick={() => setFilterType('expensive')}
            >
                Over $25
            </button>
        </div>

        <div className="product-grid">
            {filteredProducts.map((product) => (
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

export default Filter