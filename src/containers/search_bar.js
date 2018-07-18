import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

    // Initialize component level state in constructor
    constructor(props){
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // When search text is changed set the state
    onInputChange(event){
        this.setState({term: event.target.value});
    }

    // To stop the form from submitting
    onFormSubmit(event){
        event.preventDefault();

        // call action creator to fetch data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''}); //set state to empty string
    }

    // Render the component
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                className = "form-control"
                onChange = {this.onInputChange}
                value = {this.state.term}
                placeholder="Search weather for any city"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search</button>
                </span>
            </form>
        );
    }
}

// To access fetchWeather in search bar container
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);


