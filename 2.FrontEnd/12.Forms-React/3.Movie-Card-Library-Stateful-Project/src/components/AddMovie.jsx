import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  initialState() {
    // recebe o onClick como props e o this.state representa o estado atual que será modificado
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <div>

        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleChange}
              name="title"
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
              name="subtitle"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              type="text"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
              name="imagePath"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
              name="storyline"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              type="number"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.handleChange}
              name="rating"
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              value={this.state.genre}
              name="genre"
              data-testid="genre-input"
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button data-testid="send-button" onClick={this.initialState}>Adicionar filme</button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
