/*
Think of useEffect as a “watchman” inside your React component 👀
It watches for something to happen and then runs some code automatically.

In normal life terms 👇

“When X happens, do Y.”

Why do we need it?

React components mostly show UI.
But sometimes you want to do extra work, like:

Call an API 🌐

Update the page title 🏷️

Run code when data changes 🔄

Clean up something when leaving a page 🧹

👉 That extra work is handled by useEffect.
*/

import React, { useState, useEffect } from 'react';
import './Use_effect.css'; // We'll create this file for component-specific styles

const Use_effect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);// here empty array means how many time the use effect will run

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading Users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="user-gallery">
      <h2>User Gallery</h2>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              <img 
                src={`https://robohash.org/${user.id}?set=set4`} 
                alt={user.name} 
              />
            </div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p className="email">{user.email}</p>
              <p className="company">{user.company.name}</p>
              <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="profile-link">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Use_effect;