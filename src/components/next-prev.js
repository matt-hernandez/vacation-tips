import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import journey from '../constants/journey';

let pageIndex = 0;
const lastPageIndex = journey.length - 1;

class NextPrev extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  onPrev = () => {
    if (pageIndex > 0) {
      pageIndex--;
      this.navigate();
    }
  }

  onNext = () => {
    if (pageIndex < lastPageIndex) {
      pageIndex++;
      this.navigate();
    }
  }

  navigate() {
    const { history } = this.props;
    history.push(journey[pageIndex].url);
  }

  render() {
    const { onPrev } = this;
    const { onNext } = this;
    const prevDisabled = pageIndex === 0;
    const nextDisabled = pageIndex === lastPageIndex;
    return (
      <div className="next-prev">
        <button className="route-navigator" onClick={onPrev} disabled={prevDisabled}>Previous</button>
        <button className="route-navigator" onClick={onNext} disabled={nextDisabled}>Next</button>
      </div>
    );
  }
}

export default withRouter(NextPrev);
