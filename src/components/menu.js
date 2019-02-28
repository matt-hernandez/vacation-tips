import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import journey from '../constants/journey';

function Menu() {
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
          { journey.map(page => (
            <li key={page.url}>
              <Link to={page.url}>{page.title}</Link>
            </li>
          )) }
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
