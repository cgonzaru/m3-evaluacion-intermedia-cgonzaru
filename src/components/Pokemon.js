import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="imgContainer"><img src={this.props.url} alt={this.props.name} className="pokemonImg" /></div>
        <div className="pokemonName">
          <h2 className="pokemonTitle">{this.props.name}</h2>
        </div>
        <ul className="pokemonsType">

          {this.props.types.map((type, index) => {
            return (
              <li className="pokemonType" key={index}>
                {type}
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired

}

export default Pokemon;