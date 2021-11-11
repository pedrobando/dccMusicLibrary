import React, { Component } from 'react';
import axios from "axios";

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr>
                <th scope="col" >{this.props.song.id}</th>
                <th scope="col">{this.props.song.title}</th>
                <th scope="col">{this.props.song.album}</th>
                <th scope="col">{this.props.song.artist}</th>
                <th scope="col">{this.props.song.genre}</th>
                <th scope="col">{this.props.song.releaseDate}</th>
                <th scope="col"><a href="" onClick={this.props.song.id}>Delete</a></th>
            </tr>
        );
    }
}
 
export default Track;

      