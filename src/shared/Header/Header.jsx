import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Container from "../../components/Container";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-50">
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
