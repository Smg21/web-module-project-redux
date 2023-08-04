// MovieList.js

import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import { addFavorite, removeFavorite } from '../actions/favoritesActions';

const MovieList = ({ movies, favorites, addFavorite, removeFavorite }) => {
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
            <MovieListItem
              key={movie.id}
              movie={movie}
              favorites={favorites}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          ))}
        </tbody>
      </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
















