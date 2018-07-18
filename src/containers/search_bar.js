import React, {Component} from 'react';

export default class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
        console.log(event.target.value)
    }

    render(){
        return (
            <form className="input-group">
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