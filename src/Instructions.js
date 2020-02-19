import React from 'react';

class Instructions extends React.Component {
    render() {
        return (
            <ul>
                <li><b>Rendering might take a while, please be patient</b></li>
                <li><b>Renders a Canvas element, not all browsers support downloading canvas elements as image.</b></li>
                <li><b>Not all forms are available just yet. Might be added in a future update.</b></li>
                <li><b>If the image doesn't render after a long while, make sure you can connect to http://pokemon.com</b></li>
                <li><b>Source can be found on <a href="https://github.com/Zt-freak/PokePrideReact">GitHub</a></b></li>
            </ul>
        );
    }
}

export default Instructions;