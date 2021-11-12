import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import './App.css';
import MusicTable from './MusicTable/MusicTable';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.deleteSong = this.deleteSong.bind(this);
        this.editSong = this.editSong.bind(this);
        this.newSong = this.newSong.bind(this);
        this.state = { 
            songs: [],
            deletedSong: {},
            newwSong: {},
            editedSong: {}
         }
    }


    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        await axios.get(`http://localhost:3001/api/music`)
        .then((res)=>{
            //console.log(res);
            this.setState({songs: res.data});
        })
    }

    async deleteSong(id){ 
        await axios.delete(`http://localhost:3001/api/music/${id}`).then((res) => { 
        this.setState({deletedSong: res.data});
        })
        
    }

    async editSong(id){
        await axios.put(`http://localhost:3001/api/music/${id}`).then((res) => {
            this.setState({editedSong: res.data})
        })
        
    }

    async newSong(id){
        await axios.post(`http://localhost:3001/api/music/${id}`).then((res) => {
            this.setState({newwSong: res.data})
        })
        alert(`${this.props.song.title} edited..`)
    }

    componentDidUpdate(prevState){
        if(this.state.deletedSong !== prevState.deletedSong){
            this.getAllSongs();
        }
        else if(this.state.editedSong !== prevState.editedSong){
            this.getAllSongs();
        }
        else if(this.state.newSong !== prevState.newSong){
            this.getAllSongs();
        }
    }
  

    render() { 
        return (  
            <div className="container-fluid">
                <NavigationBar songs={this.state.songs}/>
                <MusicTable songs={this.state.songs} getAllSongs={this.getAllSongs} deleteSong={this.deleteSong} editSong={this.editSong}/>
            </div>

        );
    }
}
 
export default App;