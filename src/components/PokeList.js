import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="pokemonList">
        {this.props.pokemons.map((pokemon, index) => {
          return (
            <li className="card" key={index}>
              <Pokemon 
                url={pokemon.url}
                name={pokemon.name}
                types={pokemon.types}
                id={pokemon.id} 
              />
            </li>
          );
        })}
      </ul>
    );
  }

}

PokeList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object)
}

export default PokeList;