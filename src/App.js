import React from 'react';
import './App.css';
import pokemons from './pokemons';

class App extends React.Component {
  /* constructor(props) {
    super(props);
  }
 */
  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de pokemon</h1>
        <ul className="pokemonList">
          {pokemons.map(pokemon => {
            return (
              <li className="card">
                <div className="cardContainer">
                  
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
