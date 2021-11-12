import React, { Component } from 'react';
import './MusicTable.css'
import Track from '../Track/Track';
import axios from "axios";
import EditSong from '../EditSong/EditSong';

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
                    <th scope="col">Actions</th>
                    <th><EditSong/></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.songs.map((song, index) => <Track song={song} deleteSong={this.props.deleteSong} editSong={this.props.editSong} key={index}/>)}

                </tbody>
            </table>
         );
    }
}
 
export default MusicTable;