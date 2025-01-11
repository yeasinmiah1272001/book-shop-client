import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
