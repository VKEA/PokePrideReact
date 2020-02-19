import React from 'react';

class SizeSlider extends React.Component {
    render() {
        return (
            <input type="range" min="1" max="500" />
        );
    }
}

export default SizeSlider;