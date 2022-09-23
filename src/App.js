import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col justify-center align-center h-full min-h-screen max-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
