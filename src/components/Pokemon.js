import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="imgContainer"><img src={this.props.url} alt={this.props.name} className="pokemonImg" /></div>
        <div className="pokemonName">
          <h2 className="pokemonTitle">{this.props.name}</h2>
        </div>
        <ul className="pokemonsType">

          {this.props.types.map(type => {
            return (
              <li className="pokemonType" key={this.props.id}>
                {type}
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

export default Pokemon;