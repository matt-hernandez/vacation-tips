import React, { Component } from 'react';
import NextPrev from './components/next-prev';
import journey from './constants/journey';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

let pageIndex = 0;
const lastPageIndex = journey.length - 1;

class App extends Component {
  onPrev() {
    if (pageIndex > 0) {
      pageIndex--;
    }
  }

  onNext() {
    if (pageIndex < lastPageIndex) {
      pageIndex++;
    }
  }

  render() {
    const prevDisabled = pageIndex === 0;
    const nextDisabled = pageIndex === lastPageIndex;
    return (
      <Router>
        <main>
          {journey.map(page =>
            <Route exact key={page.url} path={page.url} component={page.component} />)}
          <NextPrev
            onPrev={this.onPrev}
            onNext={this.onNext}
            prevDisabled={prevDisabled}
            nextDisabled={nextDisabled} />
        </main>
      </Router>
    );
  }
}

export default App;
