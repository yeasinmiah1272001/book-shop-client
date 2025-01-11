import Container from "./Container";
import SectionTitle from "./SectionTitle";
import img1 from "../assets/category/1.webp";
import img2 from "../assets/category/2.jpg";
import img3 from "../assets/category/3.jpg";
import img4 from "../assets/category/4.jpg";
import { useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const TopCategoryBook = () => {
  const programmingBook = [
    { title: "Learn With Phython", image: img1 },
    { title: "Learn With Programmming", image: img2 },
    { title: "Learn With C Programming", image: img3 },
    { title: "Learn With Java", image: img4 },
  ];

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for larger tablets
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Single slide on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="slider-container relative py-8">
      <SectionTitle title={"All Category Books"} className=" mb-6" />
      <div className="absolute mt-28 left-0 z-10 flex justify-between items-center w-full transform -translate-y-1/2">
        <button
          onClick={previous}
          className="bg-[#01B4FF] text-white p-2 relative lg:right-6 rounded-full shadow-lg transition duration-300 focus:outline-none hover:bg-[#0199d6]"
        >
          <IoIosArrowDropleft size={32} />
        </button>
        <button
          onClick={next}
          className="bg-[#01B4FF] text-white p-2 relative lg:left-6 rounded-full shadow-lg transition duration-300 focus:outline-none hover:bg-[#0199d6]"
        >
          <IoIosArrowDropright size={32} />
        </button>
      </div>
      <Slider
        ref={sliderRef}
        {...settings}
        className="pt-6 border border-[#01B4FF] rounded-md"
      >
        {programmingBook.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-center mx-auto px-4 sm:px-6 md:px-8"
          >
            <div className="group relative w-36 h-36 sm:w-40 sm:h-40 border border-[#01B4FF] rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover p-4 sm:p-8 transition-transform duration-300 transform group-hover:scale-110"
                src={item.image}
                alt={item.title}
              />
            </div>
            <h3 className="text-center justify-center items-center -ml-24 text-sm font-medium text-gray-800 truncate mt-2">
              {item.title}
            </h3>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TopCategoryBook;
