import React from 'react';
import './App.css';
import pokemons from './pokemons';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: pokemons,
      fav: []
    };

    this.getFav = this.getFav.bind(this);
  }

  getFav(event) {
    const fav = event.currentTarget.value;
    console.log(fav);
    this.setState = {
      fav: fav
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemons} getFav={this.getFav}/>
      </div>
    );
  }
}

export default App;
