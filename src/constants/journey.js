import React, { Component } from 'react';
import Intro from '../pages/00-1-Intro';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Disclaimer1 from '../pages/00-2-Disclaimer1';
import Disclaimer2 from '../pages/00-3-Disclaimer2';
import Disclaimer3 from '../pages/00-4-Disclaimer3';
import Step1 from '../pages/01-1-Step1';
import Step1Continued from '../pages/01-2-Step1';
import Step1WhatIDid from '../pages/01-3-Step1';
import Step2 from '../pages/02-1-Step2';

const journey = [
  {
    url: '/',
    component: pageGenerator(Intro)
  },
  {
    url: '/disclaimer1',
    component: pageGenerator(Disclaimer1)
  },
  {
    url: '/disclaimer2',
    component: pageGenerator(Disclaimer2)
  },
  {
    url: '/disclaimer3',
    component: pageGenerator(Disclaimer3)
  },
  {
    url: '/step1',
    component: pageGenerator(Step1)
  },
  {
    url: '/step1Continued',
    component: pageGenerator(Step1Continued)
  },
  {
    url: '/step1WhatIDid',
    component: pageGenerator(Step1WhatIDid)
  },
  {
    url: '/step2',
    component: pageGenerator(Step2)
  }
];

const localStoragePageIndex = localStorage.getItem('ccTravelPageIndex') || 0;
let pageIndex = localStoragePageIndex ? Number(localStoragePageIndex) : 0;
const lastPageIndex = journey.length - 1;
let pageDirection = 'forward';

export function getPageIndex() {
  return pageIndex;
}

export function decreasePageIndex() {
  if (pageIndex > 0) {
    pageIndex--;
    pageDirection = 'backward';
  }
}

export function increasePageIndex() {
  if (pageIndex < lastPageIndex) {
    pageIndex++;
    pageDirection = 'forward';
  }
}

export function isAtBeginning() {
  return pageIndex === 0;
}

export function isAtEnd() {
  return pageIndex === lastPageIndex;
}

export function getPageDirection() {
  return pageDirection;
}

class NextPrev extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  onPrev = () => {
    decreasePageIndex();
    this.navigate();
  }

  onNext = () => {
    increasePageIndex();
    this.navigate();
  }

  navigate() {
    const { history } = this.props;
    const pageIndex = getPageIndex();
    history.push(journey[pageIndex].url);
    localStorage.setItem('ccTravelPageIndex', pageIndex)
  }

  render() {
    const { onPrev } = this;
    const { onNext } = this;
    const prevDisabled = isAtBeginning();
    const nextDisabled = isAtEnd();
    return (
      <div className="next-prev">
        <button className="route-navigator" onClick={onPrev} disabled={prevDisabled}>Previous</button>
        <button className="route-navigator" onClick={onNext} disabled={nextDisabled}>Next</button>
      </div>
    );
  }
}

const NextPrevWithRouter = withRouter(NextPrev);

function pageGenerator(Component) {
  return function Page() {
    return (
      <main>
        <Component />
        <NextPrevWithRouter journey={journey} />
      </main>
    );
  };
}

export default journey;
