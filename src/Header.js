import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex basis-0 justify-start items-center border-b border-solid border-black p-4 space-x-4">
      <span>Cozy Creature Canteen</span>
      <Link className="p-2 background-slate-300 border border-solid border-black" to="/">Home</Link>
      <Link className="p-2 background-slate-300 border border-solid border-black" to="/store">Store</Link>
    </nav>
  );
}

export default Header;