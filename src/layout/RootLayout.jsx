import React from "react";

import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
