import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './Nav';

function App() {
  return (
    <div className="container mx-auto flex flex-col justify-center align-center">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
