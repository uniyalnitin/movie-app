import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE__FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}
export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites]
      };
    case REMOVE__FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(movie => (movie !== action.movie))
      }
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val
      }
    default:
      return state;
  }
}
