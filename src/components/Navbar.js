import React from "react";
import { handleMovieSearch, addMovieToList } from "../actions";
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleAddMovies = (movie) => {
      this.props.dispatch(addMovieToList(movie));
  }
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const {result: movie, showSearchResults} = this.props;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />

                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddMovies(movie)}>
                    Add Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    result: state.search.result, 
    showSearchResults: state.search.showSearchResults
  }
} 

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);
export default connectedNavbarComponent;