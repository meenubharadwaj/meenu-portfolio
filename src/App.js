import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Meenu's Portfolio!</h1>
            <hr className="my-4" />
            <p className="lead">
                <Link to="/" className="btn btn-primary btn-lg" role="button">Check It Out!</Link>
            </p>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
