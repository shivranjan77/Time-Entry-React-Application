import React, { Component } from 'react'
import fire from '../Config/Fire';
import '../App.css';

export default class Main extends Component {
    
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
              <h1 className="main"> Main Page</h1> 
              <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
