import React, { Component } from 'react';
import './MusicTable.css'
import Track from '../Track/Track';

function MusicTable(props){
    return ( 
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Album</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">ReleaseDate</th>
                </tr>
            </thead>
            <tbody>
                {props.songs.map((song) => <Track song={song}/>)}
            </tbody>
        </table>
        );
}
 
export default MusicTable;