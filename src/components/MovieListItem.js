import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieListItem = ({ movie, deleteMovie }) => { 
  const history = useHistory();

  const handleDelete = () => {
    deleteMovie(movie.id);
    history.push('/movies'); 
  };

  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.genre}</td>
      <td>{movie.metascore}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = {
  deleteMovie: deleteMovie,
};

export default connect(null, mapDispatchToProps)(MovieListItem);


