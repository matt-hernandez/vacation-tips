import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import journey from '../constants/journey';

function Menu({ activeIndex }) {
  const [ menuPosition, setPosition ] = useState('out');

  const togglePosition = () => {
    if (menuPosition === 'out') {
      setPosition('in');
      return;
    }
    setPosition('out');
  };

  const closeMenu = () => {
    setPosition('out');
  };

  return (
    <div className="menu">
      <button className="menu-toggle" onClick={togglePosition}>
        <span className="hamburger-stick"/>
        <span className="hamburger-stick"/>
        <span className="hamburger-stick"/>
      </button>
      <nav className={menuPosition}>
        <button className="close-menu" onClick={closeMenu}>
          &times;
        </button>
        <ul>
          { journey.map((page, i) => (
            <li key={page.url}>
              {i !== activeIndex && <Link to={page.url}>{page.title}</Link>}
              {i === activeIndex && <button className="fake-link">{page.title}</button>}
            </li>
          )) }
        </ul>
      </nav>
    </div>
  );
}

Menu.propTypes = {
  activeIndex: PropTypes.number
};

export default Menu;
