import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.data
    return (
      <div className="pokemon">
        <div>
          <h3>name: {name}</h3>
          <h4>type: {type}</h4>
          <h5>averageWeight: {averageWeight.value}{averageWeight.measurementUnit}</h5>
        </div>
        <img src={image} alt={name}/>
      </div>
    );
  }
}

/* 
nome do pokemon;
tipo do pokemon;
peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon. 
Esse arquivo é o filho de todos, é o que está mais abaixo da árvore
PropTypes é como se fosse uma documentação
*/

Pokemon.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.object, 
    image: PropTypes.string,
  }))
}

export default Pokemon;
