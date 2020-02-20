import React from 'react';

class PokePrideCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.loadImage = this.loadImage.bind(this);
        this.fillCanvas = this.fillCanvas.bind(this);

        this.state = {
            imagesLoaded: 0
        };
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
    }

    loadImage(src, onload) {
        const img = new Image();

        img.src = src;

        return img;
    }

    fillCanvas(img1, img2) {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        this.state.imagesLoaded += 1;

        if(this.state.imagesLoaded === 2) {
            // composite now
            ctx.drawImage(img1, 0, 0, 500, 500);

            ctx.globalAlpha = 1;
            ctx.drawImage(img2, (canvas.width-350)/2, (canvas.height-350)/2, 350, 350);
        }
    }

    componentDidUpdate() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const flagImage = this.loadImage('https://raw.githubusercontent.com/Zt-freak/pokepridegenerator/master/flags/'+this.props.flagImage+'.png');
        

        flagImage.onload = () => {
            const pokemonImage = this.loadImage(this.props.pokemonImage);
            pokemonImage.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(flagImage, 0, 0, 500, 500);

                ctx.globalAlpha = 1;
                ctx.drawImage(pokemonImage, (canvas.width-350)/2, (canvas.height-350)/2, 350, 350);
            }  
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