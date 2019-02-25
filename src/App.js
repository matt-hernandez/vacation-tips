import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NextPrev from './components/next-prev';
import journey from './constants/journey';

let needRedirect = true;
const localStoragePageIndex = localStorage.getItem('ccTravelPageIndex') || 0;
const pageIndex = localStoragePageIndex ? Number(localStoragePageIndex) : 0;

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => {
          if (pageIndex > 0 && needRedirect) {
            needRedirect = false;
            return <Redirect to={journey[pageIndex].url} />;
          }
          return (
            <main>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    {journey.map(page =>
                      <Route exact key={page.url} path={page.url} component={page.component} />)}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <NextPrev />
            </main>
          )
        }}/>
      </Router>
    );
  }
}

export default App;
