import React, { Component } from 'react'
import '../App.css';

export default class Register extends Component {
    render() {
        return (
            
            <form >
            <div> 
              <label>Name</label>
              <input type="text"></input> <br></br>
              <label>UserName</label>
              <input type="text"></input><br></br>
              <label>Email</label>
              <input type="email"></input><br></br>
              <label>Password</label>
              <input type="password"></input><br></br>
              <label>Confirm Password</label>
              <input type="password"></input><br></br>
              <button type="submit">Signup</button>
            </div>
            </form>
        )
    }
}
