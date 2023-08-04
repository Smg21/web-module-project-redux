// favoritesActions.js

export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES"; // Corrected action constant name
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = () => ({
  type: TOGGLE_FAVORITES,
});

export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});
