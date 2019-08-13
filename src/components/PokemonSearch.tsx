import React, { Component } from "react";
import User from "../interfaces/User.interface";

// export interface PokemonSearchProps {
//   name: string;
//   numberOfPokemons: number;
// }

export interface PokemonSearchState {
  error: boolean;
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  numberOfAbilities: number;
  baseExperience: number;
  imageUrl: string;
}

class PokemonSearch extends Component<User, PokemonSearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>;
  constructor(props: User) {
    super(props);
    this.pokemonRef = React.createRef();
    this.state = {
      error: false,
      pokemon: null
    };
  }
  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(res => {
      if (res.status !== 200) {
        this.setState({
          error: true
        });
        return;
      } else {
        res.json().then(data => {
          this.setState({
            pokemon: {
              name: data.name,
              numberOfAbilities: data.abilities.length,
              baseExperience: data.base_experience,
              imageUrl: data.sprites.front_default
            }
          });
        });
      }
    });
  };

  render() {
    const { name: userName, numberOfPokemons } = this.props;
    const { error, pokemon } = this.state;
    let resultMarkup;

    if (error) {
      resultMarkup = <p>Pokemon not found, please try again...</p>;
    } else if (this.state.pokemon) {
      resultMarkup = (
        <div>
          <img src={pokemon.imageUrl} alt="pokemon" className="pokemon-image" />
          <p>
            {pokemon.name} has {pokemon.numberOfAbilities} abilities and{" "}
            {pokemon.baseExperience} experience points
          </p>
        </div>
      );
    }
    return (
      <div>
        <p>
          User {userName} has{" "}
          {numberOfPokemons && <span>{numberOfPokemons} pokemons</span>}
        </p>
        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
        {resultMarkup}
      </div>
    );
  }
}

export default PokemonSearch;
