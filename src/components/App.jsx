import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import './App.css';
import MusicTable from './MusicTable/MusicTable';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }



    componentDidMount(){
        this.getAllSongs();
        console.log(this.songs);
    }


    async getAllSongs(){
        await axios.get(`http://localhost:3001/api/music`)
        .then((res)=>{
            console.log(res);
            this.setState({songs: res.data});
        })
    }


    render() { 
        return (  
            <div className="container-fluid">
                <NavigationBar songs={this.state.songs}/>
                <MusicTable songs={this.state.songs}/>
            </div>

        );
    }
}
 
export default App;