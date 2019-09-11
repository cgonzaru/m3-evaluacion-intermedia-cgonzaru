import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="pokemonList">
        {this.props.pokemons.map(pokemon => {
          return (
            <li className="card" key={pokemon.id}>
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

export default PokeList;