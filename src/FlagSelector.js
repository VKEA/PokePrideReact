import React from 'react';

class FlagSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            flagImage: "gay",
        };
    }

    componentDidMount() {
        this.props.onSelectFlag(this.state.flagImage);
    }

    handleChange(event) {
        this.setState(
            {
                flagImage: event.target.value
            },
            () => this.props.onSelectFlag(this.state.flagImage)
        );
    }

    render() {
        return (
            <select onChange={this.handleChange}>
                <optgroup label="rainbow flags">
                    <option value="gay">rainbow flag</option>
                    <option value="gilbert-baker">gilbert baker rainbow flag</option>
                    <option value="philadelphia-pride">philadelphia pride flag</option>
                    <option value="quasar-pride">daniel quasar rainbow flag</option>  
                </optgroup>
                <optgroup label="lesbian">
                    <option value="lesbian-2">lesbian</option>
                    <option value="lesbian">lesbian 2</option>
                    <option value="lesbian-3">lesbian 3</option>
                    <option value="labrys">lesbian labrys</option>
                </optgroup>
                <optgroup label="polysexual">
                    <option value="bisexual">bisexual</option>
                    <option value="pansexual">pansexual</option>
                    <option value="polysexual">polysexual</option>
                </optgroup>
                <optgroup label="trans/nonbinary">
                    <option value="androgyne">androgyne</option>
                    <option value="androgyne-2">androgyne 2</option>
                    <option value="aporagender">aporagender</option>
                    <option value="demigender">demigender</option>
                    <option value="demiboy">demiboy</option>
                    <option value="demigirl">demigirl</option>
                    <option value="genderfluid">genderfluid</option>
                    <option value="genderqueer">genderqueer</option>
                    <option value="maverique">maverique</option>
                    <option value="nonbinary">nonbinary</option>
                    <option value="nonbinary2">nonbinary 2</option>
                    <option value="nonbinary3">nonbinary 3</option>
                    <option value="trans">transgender</option>
                </optgroup>
                <optgroup label="intersex">
                    <option value="intersex">intersex</option>
                    <option value="intersex-2">intersex 2</option>
                </optgroup>
                <optgroup label="ace/aro">
                    <option value="aromantic">aromantic</option>
                    <option value="asexual">asexual</option>
                </optgroup>
                <optgroup label="demisexual">
                    <option value="demisexual">demisexual</option>
                </optgroup>
                <optgroup label="agender">
                    <option value="agender">agender</option>
                    <option value="neutrois">neutrois</option>
                </optgroup>
                <optgroup label="culture">
                    <option value="bear">bear</option>
                    <option value="twink">twink</option>
                </optgroup>
                <optgroup label="countries">
                    <option value="trans-israel">israeli trans flag</option>
                    <option value="pink-jack">pink jack</option>
                </optgroup>
                <optgroup label="romantic attraction">
                    <option value="polyamoury">polyamoury</option>
                </optgroup>
                <optgroup label="other">
                    <option value="straight-ally">straight ally</option>
                </optgroup>
            </select>
        );
    }
}

export default FlagSelector;