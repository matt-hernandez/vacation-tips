import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import journey from '../constants/journey';
import { getPageIndex, decreasePageIndex, increasePageIndex,
  isAtBeginning, isAtEnd } from '../constants/page-index';

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

export default withRouter(NextPrev);
