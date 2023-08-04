// Movie.js

import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Movie = ({ movies }) => {
  const { id } = useParams();

  // Find the movie with the specified ID from the Redux store
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <p>Metascore: {movie.metascore}</p>
      <p>Description: {movie.description}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies, // Access the 'movies' state from the combined reducer
});

export default connect(mapStateToProps)(Movie);

// import React from 'react';
// import { useParams, useHistory } from 'react-router-dom';

// const Movie = (props) => {
//     const { id } = useParams();
//     const { push } = useHistory();

//     const movies = [];
//     const movie = movies.find(movie=>movie.id===Number(id));
    
//     return(<div className="modal-page col">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <div className="modal-header">						
//                     <h4 className="modal-title">{movie.title} Details</h4>
//                 </div>
//                 <div className="modal-body">
//                     <div className="flexContainer">

//                         <section className="movie-details">
//                             <div>
//                                 <label>Title: <strong>{movie.title}</strong></label>
//                             </div>
//                             <div>
//                                 <label>Director: <strong>{movie.director}</strong></label>
//                             </div>
//                             <div>
//                                 <label>Genre: <strong>{movie.genre}</strong></label>
//                             </div>
//                             <div>
//                                 <label>Metascore: <strong>{movie.metascore}</strong></label>
//                             </div>
//                             <div>
//                                 <label>Description:</label>
//                                 <p><strong>{movie.description}</strong></p>
//                             </div>
//                         </section>
                        
//                         <section>
//                             <span className="m-2 btn btn-dark">Favorite</span>
//                             <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>);
// }

// export default Movie;