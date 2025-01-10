import Container from "./Container";
import banner from "../assets/banner1.png";
import { FaLeftRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r mt-6 from-[#FFFFFF] via-[#E2F2F9] to-[#94DFFF] h-auto lg:h-[460px] w-full py-6">
      {/* Text Content */}
      <Container className="flex flex-col lg:flex-row items-center justify-evenly px-6 py-12 space-y-8 lg:space-y-0">
        <div className="max-w-lg space-y-6 sm:max-w-md text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Up to <span className="text-red-700">75% </span> Off
          </h1>
          <p className="text-gray-600 sm:text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            magna velit eleifend.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 items-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition">
              Read more <FaLeftRight />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full sm:w-[300px] md:w-[400px] lg:w-[600px]">
          <img
            src={banner}
            alt="Banner"
            className="h-auto lg:h-[400px] w-full object-contain"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
