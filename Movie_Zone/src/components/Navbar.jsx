import React from 'react';

const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Movie Zone</h1>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
    </nav>
  );
};

export default Navbar;
