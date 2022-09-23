import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex basis-0 justify-start items-center border-b border-solid border-black p-4 space-x-4">
      <span>Cozy Creature Canteen</span>
      <span className="p-2 background-slate-300 border border-solid border-black"><Link to="/">Home</Link></span>
      <span className="p-2 background-slate-300 border border-solid border-black"><Link to="/store">Store</Link></span>
    </nav>
  );
}

export default NavBar;