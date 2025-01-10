import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import BookCard from "./BookCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const FeaturedBook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("data", data);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await axios.get("/book.json");
  //         console.log("res", response);
  //         setData(response.data);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  useEffect(() => {
    const fetchData = () => {
      fetch("/book.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);

  //   slide
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container className="slider-container  mt-6">
      <div className="flex items-center justify-between">
        <SectionTitle title={"All Feature Books"} />
        <div className="flex justify-end gap-6 items-center">
          <button
            onClick={previous}
            className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
          >
            <FaArrowCircleLeft size={30} />
          </button>
          <button
            onClick={next}
            className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
          >
            <FaArrowCircleRight size={30} />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <BookCard item={item} key={item.id} />
        ))}
      </Slider>
    </Container>
  );
};

export default FeaturedBook;
