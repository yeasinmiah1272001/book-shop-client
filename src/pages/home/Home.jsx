import React from "react";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import FeaturedBook from "../../components/FeaturedBook";
import TopCategoryBook from "../../components/TopCategoryBook";
import ProgrammingBook from "../../components/ProgrammingBook";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";
import BookCarousel from "../../components/BookCarousel";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <FeaturedBook />
      <TopCategoryBook />
      <ProgrammingBook />
      <TestimonialsCarousel />
      <BookCarousel />
      <Newsletter />
    </div>
  );
};

export default Home;
