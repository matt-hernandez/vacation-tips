import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import journey, { getPageIndex, getPageDirection } from './constants/journey';

let needRedirect = true;
const pageIndex = getPageIndex();

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
            <div className={getPageDirection()}>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                  <Switch location={location}>
                    {journey.map(page =>
                      <Route exact key={page.url} path={page.url} component={page.component} />
                    )}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )
        }}/>
      </Router>
    );
  }
}

export default App;
