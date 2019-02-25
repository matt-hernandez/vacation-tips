import React, { Component } from 'react';
import NextPrev from './components/next-prev';
import journey from './constants/journey';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {journey.map(page =>
            <Route exact key={page.url} path={page.url} component={page.component} />)}
          <NextPrev />
        </main>
      </Router>
    );
  }
}

export default App;
