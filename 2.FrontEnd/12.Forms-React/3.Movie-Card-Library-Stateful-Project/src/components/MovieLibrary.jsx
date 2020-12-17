import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredConditions = this.filteredConditions.bind(this);
    this.addOnClick = this.addOnClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filteredConditions() { // referência: Vanessa Bidinotto
    // essa função existe para fazer os filtros pedidos no requisito
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((book) => book.bookmarkedOnly === true);
    }
    if (selectedGenre !== '') {
      return movies.filter((genre) => genre.genre === selectedGenre);
    }
    return movies.filter((text) =>
      text.title.includes(searchText) ||
      text.subtitle.includes(searchText) ||
      text.storyline.includes(searchText),
    );
    // retorna para MovieList o array necessário para usar no map
  }

  addOnClick(newOne) { // referência: Vanessa Bidinotto
    this.setState({ movies: [...this.state.movies, newOne] });
    // espalha o que já tiver no array e adiciana o novo
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredConditions()} />
        <AddMovie onClick={this.addOnClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
