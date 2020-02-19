import React from 'react';

class Copyright extends React.Component {
    render() {
        return (
            <p className="copyright">
                This site is not affiliated with GAME FREAK, The Pok&#xE9;mon Company or Nintendo.<br />
                Pok&#xE9;mon artwork is made by Ken Sugimori and is retrieved from: <br />
                <a href="http://pokemon.com">The Official Pok&#xE9;mon Site</a><br />
                <a href="https://bulbapedia.bulbagarden.net/wiki/">Bulbapedia</a><br />
                Pok&#xE9;mon &#xa9; 1995-{new Date().getFullYear()} Nintendo.
            </p>
        );
    }
}

export default Copyright;