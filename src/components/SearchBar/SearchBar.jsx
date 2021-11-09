import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: ''
         }
    }
    handleChange = (event) =>{
        this.setState({
            search: event.target.value
        })
    }
    render() { 
        return ( 
            <form className="d-flex" onSubmit="">
                <input className="form-control me-2" id="search" type="text" onChange={this.handleSearch} value={this.props.songs}/>
                <button className="btn btn-outline-success" type="submit">Find</button>
            </form>
        )
    }
}
 
export default SearchBar;