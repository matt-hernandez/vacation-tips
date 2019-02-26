import React from 'react';
import PropTypes from 'prop-types';

function Banner({icon, color}) {
  const icons = Array.isArray(icon) ? icon : [icon];
  return (
    <div className="banner" style={{ backgroundColor: color }}>
      {icons.map(ico => <i key={ico} className={`${ico} fa-9x`} />)}
    </div>
  );
}

Banner.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ])
};

export default Banner;
