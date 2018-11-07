import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
            <h1 className="display-4">Welcome to Meenu's Portfolio!</h1>
            <hr className="my-4" />
            <p className="lead">
                <Link to="/projects" className="btn btn-primary btn-lg" role="button">Check Out My Projects!</Link>
            </p>
          </div>
      </div>
    );
  }
}

export default App;
