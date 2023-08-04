import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import MovieList from './MovieList';
import Movie from './Movie';
import MovieHeader from './MovieHeader';
import AddMovieForm from './AddMovieForm';
import FavoriteMovieList from './FavoriteMovieList';

const App = ({ displayFavorites }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Redux Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader />
        <div className="row">
          {displayFavorites && <FavoriteMovieList />}
        
          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>
            <Route exact path="/movies/:id" component={Movie} />
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayFavorites: state.favorites.displayFavorites, // Access the 'displayFavorites' state from the 'favorites' state
});

export default connect(mapStateToProps)(App);
