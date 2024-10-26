import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../components/common/ScrollToTop';
import ThemeProvider from '../components/common/ThemeProvider';
import Navbar2 from '../components/common/Navbar2';

export const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar2/>
      <ThemeProvider />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
