// FavoriteMovieList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = ({ favorites, displayFavorites, removeFavorite }) => {
  if (!displayFavorites) return null; // If displayFavorites is false, do not render anything

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
          <button onClick={() => removeFavorite(movie.id)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites,
  displayFavorites: state.favorites.displayFavorites,
});

const mapDispatchToProps = {
  removeFavorite: removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);


