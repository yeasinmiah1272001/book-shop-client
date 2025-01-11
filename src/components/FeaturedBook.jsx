import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import BookCard from "./BookCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
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
            className="bg-[#01B4FF] text-white p-2 rounded-full shadow-md transition duration-300"
          >
            <IoIosArrowDropleft size={32} />
          </button>
          <button
            onClick={next}
            className="bg-[#01B4FF] text-white p-2 rounded-full shadow-md  transition duration-300"
          >
            <IoIosArrowDropright size={32} />
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
