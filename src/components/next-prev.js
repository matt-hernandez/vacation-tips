import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextPrev extends Component {
  static propTypes = {
    nextDisabled: PropTypes.bool,
    onNext: PropTypes.func,
    onPrev: PropTypes.func,
    prevDisabled: PropTypes.bool
  };

  render() {
    const { onPrev } = this.props;
    const { onNext } = this.props;
    const { prevDisabled } = this.props;
    const { nextDisabled } = this.props;
    return (
      <div className="next-prev">
        <button className="route-navigator" onClick={onPrev} disabled={prevDisabled}>Previous</button>
        <button className="route-navigator" onClick={onNext} disabled={nextDisabled}>Next</button>
      </div>
    );
  }
}

export default NextPrev;
