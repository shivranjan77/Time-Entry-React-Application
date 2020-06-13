import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Nav from './Nav';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <HomePage/>
     <Route path="/registration" component={Register}></Route>
     <Route path="/Signin" component={Login}></Route>

     
      
    </div>
    </Router>
  );
}

export default App;
