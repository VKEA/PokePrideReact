import React from 'react';

class PokemonSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=2000")
        .then(res => res.json())
        .then(
            (response) => {
            const pokemonArray = [];
            
            for (let i = 0; i < response.results.length; i++) {
                if (
                    response.results[i].name.match(/totem/i) ||
                    response.results[i].name.match(/spewpa-/i) ||
                    response.results[i].name.match(/scatterbug-/i) ||
                    response.results[i].name.match(/mothim-/i) ||
                    response.results[i].name.match(/rockruff-/i) ||
                    response.results[i].name.match(/greninja-battle-bond/i) ||
                    (response.results[i].name.match(/minior-/i) && !response.results[i].name.match(/red/i) && !response.results[i].name.match(/meteor/i)) ||
                    response.results[i].name.match(/silvally-/i) ||
                    response.results[i].name.match(/genesect-/i) ||
                    response.results[i].name.match(/arceus-/i)
                ) {
                    // Do nothing
                }
                else {
                    pokemonArray.push([response.results[i].name, response.results[i].url])
                }
            }

            pokemonArray.sort(
                (a, b) => {
                    if (a[0] === b[0]) {
                        return 0;
                    }
                    else {
                        return (a[0] < b[0]) ? -1 : 1;
                    }
                }
            );

            this.setState({
                items: pokemonArray,
                value: pokemonArray[0][1]
            });

            console.log(this.state.items);

            },
            (error) => {
                console.log("oof! Something went wrong.");
            }
        )
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <select onChange={this.handleChange}>
                {this.state.items.map(x => (<option key={x[1]} value={x[1]}>{x[0]}</option>))}
            </select>
        );
    }
}

export default PokemonSelector;