import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = ({ movies }) => {
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
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>

      <MovieFooter totalMovies={movies.length} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);


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