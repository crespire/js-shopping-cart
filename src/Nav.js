import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex place-content-center">
      <Link to="/">Home</Link> | <Link to="/store">Store</Link>
    </nav>
  );
}

export default NavBar;