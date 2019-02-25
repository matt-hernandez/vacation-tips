import React, { Component } from 'react';
import Intro from './pages/Intro';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Intro} />
        </main>
      </Router>
    );
  }
}

export default App;
