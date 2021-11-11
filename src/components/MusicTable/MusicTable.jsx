import React, { Component } from 'react';
import './MusicTable.css'
import Track from '../Track/Track';

class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    render() { 
        return ( 
            <table className="table" data={this.props.songs}>
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Album</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Genre</th>
                    <th scope="col">ReleaseDate</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.songs.map((song) => <Track song={song}/>)}
                </tbody>
            </table>
         );
    }
}
 
export default MusicTable;