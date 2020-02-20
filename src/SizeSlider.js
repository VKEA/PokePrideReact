import React from 'react';

class SizeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: "350",
        };
    }

    componentDidMount() {
        this.props.onSelectSize(this.state.value);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        },
            () => this.props.onSelectSize(this.state.value)
        );
    }

    render() {
        return (
            <input type="range" min="1" max="500" value={this.state.value} onChange={this.handleChange}/>
        );
    }
}

export default SizeSlider;