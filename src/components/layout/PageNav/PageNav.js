import React from 'react';
import { NavLink } from 'react-router-dom';

/* Użyliśmy komponentu NavLink, aby linki dostawały klasę active kiedy jesteśmy stronie danego widoku. */
function PageNav() {
  return (
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
        Homepage
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
        Login
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Tables`} activeClassName="active">
        Tables
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Waiter`} activeClassName="active">
        Waiter
      </NavLink>
    </nav>
  );
}

export default PageNav;