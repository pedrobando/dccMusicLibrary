import React, { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container-fluid">
                <NavigationBar/>
            </div>

        );
    }
}
 
export default App;