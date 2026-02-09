import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import MovieCard from './components/MovieCard';
import { movies } from './data';

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const filterMovies = () => {
      let tempMovies = movieList;

      if (selectedCategory !== "All") {
        tempMovies = tempMovies.filter(
          (movie) => movie.category === selectedCategory
        );
      }

      if (searchQuery) {
        tempMovies = tempMovies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredMovies(tempMovies);
    };

    filterMovies();
  }, [searchQuery, selectedCategory, movieList]);

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;;
