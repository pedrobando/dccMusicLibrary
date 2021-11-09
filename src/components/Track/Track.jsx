import React, { Component } from 'react';
import axios from "axios";

function Track(props){

    return ( 
        
        <tr>
            <th scope="col" >{props.song.id}</th>
            <th scope="col">{props.song.title}</th>
            <th scope="col">{props.song.album}</th>
            <th scope="col">{props.song.artist}</th>
            <th scope="col">{props.song.genre}</th>
            <th scope="col">{props.song.releaseDate}</th>
        </tr>
         );
    
}
 
export default Track;

      