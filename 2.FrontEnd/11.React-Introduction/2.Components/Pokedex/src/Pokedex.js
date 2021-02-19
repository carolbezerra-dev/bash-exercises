import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import data from './data'

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex"> {/* Javascript coloca entre { } */}
        {data.map(element =>  <Pokemon key={element.id} data={element}/>)}
        {/* Map para passar por todos os dados do arquivo */}
      </div>
    ) /* Pokedex é pai de Pokemon, passa dados e recebe resultado */
  }
}

export default Pokedex;
