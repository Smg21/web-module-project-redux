// FavoriteMovieList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const FavoriteMovieList = ({ favorites }) => {
  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
            {movie.title}
            <span className="material-icons">remove_circle</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites.favorites, // Access the 'favorites' state from the combined reducer
});

export default connect(mapStateToProps)(FavoriteMovieList);
