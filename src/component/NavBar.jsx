import React from 'react';
import { Link } from 'react-router-dom';
import 'react-fancybox/lib/fancybox.css';

export const Navbar = ({ route }) => {
  console.log(route);
  return (
    <>
      <div className="navBar">
        <ul>
          <li>
            <a href="assets\CV Adrien Péters.pdf" download>
              {' '}
              CV
            </a>
          </li>
          {route.map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
