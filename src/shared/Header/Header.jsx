import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Container from "../../components/Container";

const Header = () => {
  return (
    <Container className={""}>
      <TopHeader />
      <BottomHeader />
    </Container>
  );
};

export default Header;
