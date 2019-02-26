import React from 'react';
import PropTypes from 'prop-types';

function Banner({icon, color}) {
  return (
    <div className="banner" style={{ backgroundColor: color }}>
      <i className={`fa ${icon} fa-9x`} />
    </div>
  );
}

Banner.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string
};

export default Banner;
