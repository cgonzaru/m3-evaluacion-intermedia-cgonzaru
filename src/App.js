import React from 'react';
import './App.css';
import pokemons from './pokemons';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemons
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de pokemon</h1>
        <ul className="pokemonList">
          {this.state.pokemons.map(pokemon => {
            return (
              <li className="card" key={pokemon.id}>
                <div className="cardContainer">
                  <div className="imgContainer"><img src={pokemon.url} alt={pokemon.name} className="pokemonImg" /></div>
                  <div className="pokemonName">
                    <h2 className="pokemonTitle">{pokemon.name}</h2>
                  </div>
                  <ul className="pokemonsType">

                    {pokemon.types.map(type => {
                      return (
                        <li className="pokemonType" key={pokemon.id}>
                          {type}
                        </li>
                      );
                    })}

                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default App;
