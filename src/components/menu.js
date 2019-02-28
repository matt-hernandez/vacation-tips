import React from 'react';
import { Link } from 'react-router-dom';
import journey from '../constants/journey';

function Menu() {
  return (
    <nav>
      <ul>
        { journey.map(page => (
          <li key={page.url}>
            <Link to={page.url}>{page.title}</Link>
          </li>
        )) }
      </ul>
    </nav>
  );
}

export default Menu;
