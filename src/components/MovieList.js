// MovieList.js

import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
const MovieList = ({ movies, displayFavorites }) => {
  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Metascore</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            // Display the movie only if displayFavorites is false OR if it's a favorited movie
            (!displayFavorites || movie.isFavorite) && (
              <MovieListItem key={movie.id} movie={movie} />
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies.map((movie) => ({
    ...movie,
    isFavorite: state.favorites.favorites.some((favMovie) => favMovie.id === movie.id),
  })),
  displayFavorites: state.favorites.displayFavorites,
});

export default connect(mapStateToProps)(MovieList);










