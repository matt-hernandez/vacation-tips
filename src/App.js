import React, { Component } from 'react';
import Intro from './pages/00-1-Intro';
import Disclaimer1 from './pages/00-2-Disclaimer1';
import Disclaimer2 from './pages/00-3-Disclaimer2';
import Disclaimer3 from './pages/00-4-Disclaimer3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Intro} />
          <Route exact path="/disclaimer1" component={Disclaimer1} />
          <Route exact path="/disclaimer2" component={Disclaimer2} />
          <Route exact path="/disclaimer3" component={Disclaimer3} />
        </main>
      </Router>
    );
  }
}

export default App;
