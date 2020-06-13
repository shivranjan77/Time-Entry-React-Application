import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form>
            <div>
            <label>Email</label>
              <input type="email"></input><br></br>
              <label>Password</label>
              <input type="password"></input><br></br>
              <button type="submit">Log In</button>
            </div>
            </form>
        )
    }
}
