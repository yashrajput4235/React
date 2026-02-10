import React, { useState } from 'react'
import '../App.css'

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill in all fields");
            return;
        }
        alert(`Form 1 Submitted!\nName: ${name}\nEmail: ${email}`);
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="modern-form">
                <h2>Simple Form</h2>
                <div className="form-group">
                    <label htmlFor="name-1">Name</label>
                    <input
                        id="name-1"
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email-1">Email</label>
                    <input
                        id="email-1"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password-1">Password</label>
                    <input
                        id="password-1"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}

export default Form