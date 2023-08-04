// MovieListItem.js

import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from "../actions/favoritesActions";
import { deleteMovie } from "../actions/movieActions";
const MovieListItem = ({ movie, deleteMovie, isFavorite, addFavorite, removeFavorite }) => {
  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };
  const handleDelete = () => {
    deleteMovie(movie.id);
  };
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td>{movie.metascore}</td>
      <td>
        {isFavorite ? (
          <button onClick={handleFavorite}>&#x1F496;</button> // Red heart for favorited movies
        ) : (
          <button onClick={handleFavorite}>🤍</button> // White heart for non-favorited movies
        )}
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isFavorite: state.favorites.favorites.some((favMovie) => favMovie.id === ownProps.movie.id),
});

const mapDispatchToProps = {
  deleteMovie: deleteMovie,
  addFavorite: addFavorite,
  removeFavorite: removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);





