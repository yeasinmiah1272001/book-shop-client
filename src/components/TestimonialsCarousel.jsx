import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Container from "./Container";
import img1 from "../assets/client/download (2).png";
import img2 from "../assets/client/download (3).png";
import img3 from "../assets/client/download (4).png";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Nash Patrik",
    role: "CEO, Manpol",
    image: img1,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.",
    stars: 5,
  },
  {
    name: "Miriam Barron",
    role: "CEO, Manpol",
    image: img2,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.",
    stars: 5,
  },
  {
    name: "Bria Malone",
    role: "CEO, Manpol",
    image: img3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.",
    stars: 5,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="w-full mx-auto py-8 px-4">
      <SectionTitle className={"text-center"} title={"Testimonials"} />
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-12 rounded-full mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
              <div className="flex items-center justify-center mt-4">
                {Array.from({ length: testimonial.stars }, (_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TestimonialsCarousel;
