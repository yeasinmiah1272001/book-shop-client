import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct import for Pagination module
import "swiper/css";
import "swiper/css/pagination"; // Import styles for pagination
import img1 from "../assets/category/5.png";
import img2 from "../assets/category/6.png";
import img3 from "../assets/category/7.png";
import Container from "./Container";

const BookCarousel = () => {
  return (
    <Container className="bg-blue-50 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-8">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
          All books are 75% off now!
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mt-4">
          Don't miss such a deal! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
        </p>
        <div className="flex justify-center lg:justify-start mt-6 gap-6">
          {/* Countdown */}
          {[
            { value: "768", label: "DAYS" },
            { value: "01", label: "HOUR" },
            { value: "27", label: "MINS" },
            { value: "55", label: "SECS" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-900">
                {item.value}
              </p>
              <p className="text-xs md:text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={img1} alt="Books" className="w-4/5 md:w-3/4 " />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={img2} alt="Books" className="w-4/5 md:w-3/4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <img src={img3} alt="Books" className="w-4/5 md:w-3/4 " />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default BookCarousel;
