import React from "react";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import FeaturedBook from "../../components/FeaturedBook";
import TopCategoryBook from "../../components/TopCategoryBook";
import ProgrammingBook from "../../components/ProgrammingBook";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <FeaturedBook />
      <TopCategoryBook />
      <ProgrammingBook />
    </div>
  );
};

export default Home;
