import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './Nav';

function App() {
  return (
    <div className="flex flex-col justify-center align-center h-full min-h-screen max-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
