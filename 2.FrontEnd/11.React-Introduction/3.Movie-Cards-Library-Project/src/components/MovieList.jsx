// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((element) => <MovieCard key={element.title} movies={element} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;

/* App que é o pai, mandou para o filho MovieList dados através do movies={Data}
aqui o array de objetos entrou no map, onde cada um dos seus dados foi enviado para o MovirCard
Ou seja, MovieList é pai de MovieCard */
