import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;