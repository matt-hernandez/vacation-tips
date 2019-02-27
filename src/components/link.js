import React from 'react';
import PropTypes from 'prop-types';

function Link({children, href}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

export default Link;
