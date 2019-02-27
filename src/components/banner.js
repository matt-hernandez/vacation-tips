import React from 'react';
import PropTypes from 'prop-types';
import me from '../images/small.jpg';

function Banner({icon, color, headshot}) {
  const icons = Array.isArray(icon) ? icon : [icon];
  return (
    <div className="banner" style={{ backgroundColor: color }}>
      {!headshot && icons.map(ico => <i key={ico} className={`${ico} fa-9x`} />)}
      {headshot && <img className="headshot" src={me} alt="Matt Hernandez" />}
    </div>
  );
}

Banner.propTypes = {
  color: PropTypes.string,
  headshot: PropTypes.bool,
  icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
};

export default Banner;
