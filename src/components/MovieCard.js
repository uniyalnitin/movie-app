import React from "react";
import { addToFavourites, removeFromFavourites } from "../actions";
class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch(addToFavourites(movie));
  }

  handleUnFavouriteClick = () => {
    const {movie} = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  }

  render() {
    const { movie, isFavouriteMovie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {!isFavouriteMovie
              ? <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
              : <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
            }
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
