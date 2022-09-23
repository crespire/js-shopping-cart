import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex grow flex-col flex-1 place-content-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-3xl">Welcome!</p>
        <p>You're about to step into the Cozy Creature Canteen!</p>
        <p>You'll find everything you need here to take care of your pet!</p>
        <span className="p-3 background-slate-300 border-2 border-solid border-black"><Link to="store">Visit the store</Link></span>
      </div>
      
    </div>
  );
}

export default Home;