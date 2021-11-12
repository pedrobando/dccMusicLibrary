import React, { Component } from 'react';
import EditSong from '../EditSong/EditSong';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr key={this.props.key}>
                <th scope="col" >{this.props.song.id}</th>
                <th scope="col">{this.props.song.title}</th>
                <th scope="col">{this.props.song.album}</th>
                <th scope="col">{this.props.song.artist}</th>
                <th scope="col">{this.props.song.genre}</th>
                <th scope="col">{this.props.song.releaseDate}</th>
                <th scope="col"><a onClick={() => this.props.deleteSong(this.props.song.id)}><i class="bi bi-x"></i></a><a data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil"></i></a></th>
                <th scope="col">
                </th>
            </tr>
        );
    }
}
 
export default Track;

      