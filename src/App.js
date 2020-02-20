import React from 'react';

import PokePrideCanvas from './PokePrideCanvas';
import PokemonSelector from './PokemonSelector';
import FlagSelector from './FlagSelector';
import Instructions from './Instructions';
import Copyright from './Copyright';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handlePokemon = this.handlePokemon.bind(this);
        this.handleFlag = this.handleFlag.bind(this);
        this.getPokemonImage = this.getPokemonImage.bind(this);

        this.state = {
            pokemon: {
                name: null,
                species: null
            },
            pokemonImage: null,
            flagImage: null
        };
    }

    handlePokemon (pokemonValue) {
        this.setState(
            {
                pokemon: pokemonValue
            },
            () => this.getPokemonImage()
        );
    }

    handleFlag (flagValue) {
        this.setState({
            flagImage: flagValue
        });
    }

    getPokemonImage () {
        const name = this.state.pokemon.name;
        let pokemonImage = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+this.state.pokemon.species;
        if (
            name.match(/-mega$/i) ||
            name.match(/-mega-x$/i) ||
            (name.match(/-alola$/i) && !name.match(/cap/i)) ||
            name.match(/-primal$/i) ||
            name.match(/-unbound$/i) ||
            name.match(/-origin$/i) ||
            name.match(/-therian$/i) ||
            name.match(/-resolute$/i) ||
            name.match(/-pirouette$/i) ||
            name.match(/-blue-striped$/i) ||
            name.match(/-east$/i) ||
            name.match(/-sky$/i) ||
            name.match(/-white$/i) ||
            name.match(/-sandy$/i) ||
            name.match(/-summer$/i) ||
            name.match(/-heat$/i) ||
            name.match(/-pom-pom$/i) ||
            name.match(/-dusk$/i) ||
            name.match(/-attack$/i) ||
            name.match(/-school$/i) ||
            name.match(/-blade$/i) ||
            name.match(/-midnight$/i) ||
            name.match(/-10$/i) ||
            name.match(/-ash$/i) ||
            name.match(/-sunshine$/i)
        ) {
            pokemonImage += '_f2.png';
        }
        else if (
            name.match(/-mega-y$/i) ||
            name.match(/-trash$/i) ||
            name.match(/-wash$/i) ||
            name.match(/-black$/i) ||
            name.match(/-dawn$/i) ||
            name.match(/-defense$/i) ||
            name.match(/-autumn$/i) ||
            name.match(/-complete$/i) ||
            name.match(/-pau$/i)
        ) {
            pokemonImage += '_f3.png';
        }
        else if (
            name.match(/-ultra$/i) ||
            name.match(/-winter$/i) ||
            name.match(/-frost$/i) ||
            name.match(/-speed$/i) ||
            name.match(/-sensu$/i)
        ) {
            pokemonImage += '_f4.png';
        }
        else if (
            name.match(/-fan$/i)
        ) {
            pokemonImage += '_f5.png';
        }
        else if (
            name.match(/-mow$/i)
        ) {
            pokemonImage += '_f6.png';
        }
        else {
            pokemonImage += '.png';
        }

        this.setState({
            pokemonImage: pokemonImage
        });
    }
    
    render () {
        return (
            <div className="App">
                <PokePrideCanvas pokemonImage={this.state.pokemonImage} flagImage={this.state.flagImage} />
                <PokemonSelector onSelectPokemon={this.handlePokemon} />
                <FlagSelector onSelectFlag={this.handleFlag}/>
                <Instructions />
                <Copyright />
            </div>
        );
    }
}

export default App;
