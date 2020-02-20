import React from 'react';

class PokePrideCanvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonImage: null,
            pokemonSize: null
        };
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const pokemonImage = this.refs.pokemonImage;

        this.setState({
            pokemonImage: this.props.pokemonImage,
            pokemonSize: this.props.pokemonSize
        });

        pokemonImage.onload = () => {
            ctx.globalAlpha = 1;
            ctx.drawImage(pokemonImage, (canvas.width-this.props.pokemonSize)/2, (canvas.height-this.props.pokemonSize)/2, this.props.pokemonSize, this.props.pokemonSize);
        }
    }

    render() {
        return (
            <>
                <canvas ref="canvas" id="pokePrideCanvas" width="500" height="500" />
                <img alt="the pokemon you have selected" ref="pokemonImage" className="pokemonimage" src={this.props.pokemonImage} />
            </>
        );
    }
}

export default PokePrideCanvas;