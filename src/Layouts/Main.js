import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import TopNavbar from '../Pages/Shared/TopNavbar/TopNavbar';

const Main = () => {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;