// Movie.js

import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const Movie = ({ movies, favorites, addFavorite, removeFavorite }) => {
  const { id } = useParams();

  // Find the movie with the specified ID from the Redux store
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  const isFavorite = favorites.some((favMovie) => favMovie.id === id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <p>Metascore: {movie.metascore}</p>
      <p>Description: {movie.description}</p>
      {favorites.displayFavorites && (
        <button onClick={handleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  favorites: state.favorites.favorites,
});

const mapDispatchToProps = {
  addFavorite: addFavorite,
  removeFavorite: removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
