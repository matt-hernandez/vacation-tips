import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import journey, { getPageIndex, getPageDirection, setPageIndex } from './constants/journey';
import Menu from './components/menu';

let needRedirect = true;
const pageIndex = getPageIndex();

class App extends Component {
  render() {
    return (
      <Router basename="/vacation-tips">
        <Route render={({ location }) => {
          if (pageIndex > 0 && needRedirect && location.pathname === '/') { // Used at start up
            needRedirect = false;
            return <Redirect to={journey[pageIndex].url} />;
          }
          needRedirect = false;
          const newPageIndex = journey.findIndex(page => page.url === location.pathname);
          setPageIndex(newPageIndex);
          const pageDirection = getPageDirection();
          return (
            <div className={pageDirection}>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                  <Switch location={location}>
                    {journey.map(page =>
                      <Route exact key={page.url} path={page.url} component={page.component} />
                    )}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Menu activeIndex={newPageIndex} />
            </div>
          )
        }}/>
      </Router>
    );
  }
}

export default App;
