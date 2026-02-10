import React, { useState } from 'react'
import '../App.css'

function Multiplformhandeling() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields")
      return
    }
    
    alert(
      `Form 2 Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`
    )

    setFormData({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="modern-form">
        <h2>Multiple Input Form</h2>
        <div className="form-group">
          <label htmlFor="name-2">Name</label>
          <input
            id="name-2"
            className="form-input"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email-2">Email</label>
          <input
            id="email-2"
            className="form-input"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password-2">Password</label>
          <input
            id="password-2"
            className="form-input"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  )
}

export default Multiplformhandeling
