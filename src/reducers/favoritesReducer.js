import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE, TOGGLE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      const newMovie = action.payload;
      if (!state.favorites.some((favMovie) => favMovie.id === newMovie.id)) {
        return {
          ...state,
          favorites: [...state.favorites, newMovie],
        };
      }
      return state;
    case REMOVE_FAVORITE:
      const movieId = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter((favMovie) => favMovie.id !== movieId),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
