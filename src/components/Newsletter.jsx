import React from "react";
import Container from "./Container";

const Newsletter = () => {
  return (
    <div className="bg-blue-50 p-8 lg:p-12 mt-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
      <Container className={"flex items-center justify-between"}>
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Subscribe To <br /> Our Newsletter
          </h2>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <p className="text-sm md:text-base text-gray-600 mb-4">
            Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
            consectetur. Elit adipiscing enim pharetra hac.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter Your Email Address Here"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-r-lg text-sm md:text-base font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
