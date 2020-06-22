// {
//     type: "ADD_MOVIES"
//     movies :[]
// }

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE__FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
// action creator
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addToFavourites(movie){
  return {
    type: ADD_TO_FAVOURITES,
    movie
  }
}

export function removeFromFavourites(movie){
  return {
    type: REMOVE__FROM_FAVOURITES,
    movie
  }
}

export function setShowFavourites(val){
  return {
    type: SET_SHOW_FAVOURITES,
    val
  }
}