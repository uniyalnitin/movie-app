// {
//     type: "ADD_MOVIES"
//     movies :[]
// }

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_SEARCH_MOVIE = 'ADD_SEARCH_MOVIE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';

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
    type: REMOVE_FROM_FAVOURITES,
    movie
  }
}

export function setShowFavourites(val){
  return {
    type: SET_SHOW_FAVOURITES,
    val
  }
}

export function handleMovieSearch(movie){
  const url = `http://www.omdbapi.com/?apikey=49346c1f&t=${movie}`;
  
  return function(dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log(movie);
      dispatch(addSearchMovie(movie));
    })
  }
}

export function addSearchMovie(movie){
  return {
    type: ADD_SEARCH_MOVIE,
    movie
  }
}

export function addMovieToList(movie){
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  }
}