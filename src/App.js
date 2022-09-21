import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './Nav';

function App() {
  return (
    // This effectively becomes a template file
    <div className="container mx-auto">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
