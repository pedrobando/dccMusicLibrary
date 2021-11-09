import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={}/>
                <button className="btn btn-outline-success" type="submit">Find</button>
            </form>
        )
    }
}
 
export default SearchBar;



handleChange = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleSubmit  = (event) =>{
    event.preventDefault();
    this.props.createNewBook(this.state)
}
render() { 
    return ( 
        <form onSubmit={this.handleSubmit}>
                <label>Book Name</label>
                <input name="title" onChange={this.handleChange} value={this.state.title}/>
                <label>Author</label>
                <input name="author" onChange={this.handleChange} value={this.state.author}/>
            <button class="btn btn-primary" type="submit">Create Book</button>
        </form>