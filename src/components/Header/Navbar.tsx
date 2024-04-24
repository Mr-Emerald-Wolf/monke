import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';

export const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <nav className="navbar">
      <span className="navbar__brand">RipperDoc Store</span>

      <ul className="flex-1">
        <li>
          <NavLink className="navbar__link" to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/orders" end>
            Orders
          </NavLink>
        </li>
      </ul>
      {!isAuthenticated && (
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
      {isAuthenticated && <div className="navbar__brand">user.name</div>}
    </nav>
  );
};
