
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorites } from '../actions/favoritesActions';

const MovieHeader = ({ appTitle, displayFavorites, toggleFavorites }) => {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
          <div className="btn btn-sm btn-primary" onClick={toggleFavorites}>
            <span>{displayFavorites ? 'Hide' : 'Show'} Favorites</span>
          </div>
          <Link to="/movies" className="btn btn-sm btn-primary">
            View All Movies
          </Link>
          <Link to="/movies/add" className="btn btn-sm btn-success">
            <i className="material-icons">&#xE147;</i>{' '}
            <span>Add New Movie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appTitle: state.movies.appTitle,
  displayFavorites: state.favorites.displayFavorites,
});

const mapDispatchToProps = {
  toggleFavorites: toggleFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieHeader);

// // MovieHeader.js

// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// const MovieHeader = ({ appTitle, displayFavorites }) => {
//   return (
//     <div className="table-title">
//       <div className="row">
//         <div className="col-sm-6">
//           <h2>{appTitle}</h2>
//         </div>
//         <div className="col-sm-6 headerBar">
//           <div className="btn btn-sm btn-primary">
//             <span>{displayFavorites ? 'Hide' : 'Show'} Favorites</span>
//           </div>
//           <Link to="/movies" className="btn btn-sm btn-primary">
//             View All Movies
//           </Link>
//           <Link to="/movies/add" className="btn btn-sm btn-success">
//             <i className="material-icons">&#xE147;</i>{' '}
//             <span>Add New Movie</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   appTitle: state.movies.appTitle, // Access the 'appTitle' state from the 'movies' state
//   displayFavorites: state.favorites.displayFavorites, // Access the 'displayFavorites' state from the 'favorites' state
// });

// export default connect(mapStateToProps)(MovieHeader);


//hh