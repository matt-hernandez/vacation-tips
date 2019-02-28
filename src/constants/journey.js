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
import Step2P5 from '../pages/02-2-Step2';
import Step2P5WhatIDid from '../pages/02-3-Step2';
import Step2P5Continued from '../pages/02-4-Step2';
import Step2P5WhatIDidContinued from '../pages/02-5-Step2';
import Step3 from '../pages/03-0-Step3';
import Step4 from '../pages/04-1-Step4';
import Step4WhatIDid from '../pages/04-2-Step4';
import Step5 from '../pages/05-1-Step5';
import Step5WhatIDid from '../pages/05-2-Step5';
import Step5P5 from '../pages/05-3-Step5';
import Step5P5WhatIDid from '../pages/05-4-Step5';
import Step6 from '../pages/06-1-Step6';
import Step7 from '../pages/07-1-Step7';
import Step8 from '../pages/08-1-Step8';
import PartingWords from '../pages/09-Parting-Words';

const journey = [
  {
    url: '/',
    page: Intro
  },
  {
    url: '/disclaimer1',
    page: Disclaimer1
  },
  {
    url: '/disclaimer2',
    page: Disclaimer2
  },
  {
    url: '/disclaimer3',
    page: Disclaimer3
  },
  {
    url: '/step1',
    page: Step1
  },
  {
    url: '/step1Continued',
    page: Step1Continued
  },
  {
    url: '/step1WhatIDid',
    page: Step1WhatIDid
  },
  {
    url: '/step2',
    page: Step2
  },
  {
    url: '/step2P5',
    page: Step2P5
  },
  {
    url: '/step2P5WhatIDid',
    page: Step2P5WhatIDid
  },
  {
    url: '/step2P5Continued',
    page: Step2P5Continued
  },
  {
    url: '/step2P5WhatIDidContinued',
    page: Step2P5WhatIDidContinued
  },
  {
    url: '/step3',
    page: Step3
  },
  {
    url: '/step4',
    page: Step4
  },
  {
    url: '/step4WhatIDid',
    page: Step4WhatIDid
  },
  {
    url: '/step5',
    page: Step5
  },
  {
    url: '/step5WhatIDid',
    page: Step5WhatIDid
  },
  {
    url: '/step5P5',
    page: Step5P5
  },
  {
    url: '/step5P5WhatIDid',
    page: Step5P5WhatIDid
  },
  {
    url: '/step6',
    page: Step6
  },
  {
    url: '/step7',
    page: Step7
  },
  {
    url: '/step8',
    page: Step8
  },
  {
    url: '/partingWords',
    page: PartingWords
  }
].map(page => ({
  ...page,
  title: page.title,
  component: pageGenerator(page.page)
}));

const localStoragePageIndex = localStorage.getItem('ccTravelPageIndex') || 0;
let pageIndex = localStoragePageIndex ? Number(localStoragePageIndex) : 0;
const lastPageIndex = journey.length - 1;
let pageDirection = 'forward';

export function getPageIndex() {
  return pageIndex;
}

export function setPageIndex(index) {
  if (index >= 0 && index <= lastPageIndex) {
    pageIndex = index;
  }
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
        <section>
          <h1>{Component.title}</h1>
        </section>
        <Component />
        <NextPrevWithRouter journey={journey} />
      </main>
    );
  };
}

export default journey;
