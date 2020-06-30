import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { connect } from 'react-redux';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
    // console.log("movies", store.getState());
  }

  isFavouriteMovie = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props; //{ movies, search}
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;
    console.log('list', list)
    return (
      <div className="App">
        <Navbar dispatch={this.props.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                isFavouriteMovie={this.isFavouriteMovie(movie)}
                dispatch={this.props.dispatch}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to Display</div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('state', state);
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
