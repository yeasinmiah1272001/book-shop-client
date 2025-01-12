import React, { useEffect } from "react";
import { AiOutlineBook, AiFillStar } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsCartCheck } from "react-icons/bs";
import { MdLocalShipping, MdOutlineReplay } from "react-icons/md";
import Container from "../components/Container";
import { useLoaderData, useParams } from "react-router-dom";
import BookCard from "../components/BookCard";

const SingleBook = () => {
  const allBook = useLoaderData();
  const { id } = useParams();

  // Get the single book
  const singlebook = allBook.find((item) => item.id == id);

  // Filter related books by category, excluding the current book
  const relatedBooks = allBook.filter(
    (item) => item.category === singlebook.category && item.id !== singlebook.id
  );

  return (
    <Container>
      {/* Section Title with Icon */}
      <div className="flex items-center gap-2 text-2xl font-bold text-gray-800 mt-4">
        <AiOutlineBook className="text-orange-500" />
        <h1>Single Book Page</h1>
      </div>

      <div className="flex items-center justify-evenly gap-8 mt-8">
        {/* Book Image */}
        <div className="md:w-60">
          <img
            src={singlebook.image_url}
            alt={singlebook.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col md:w-2/3 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {singlebook.title}
          </h1>
          <p className="text-lg text-gray-600">By {singlebook.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <AiFillStar key={index} />
            ))}
            <span className="text-gray-600 text-sm">(150 Reviews)</span>
          </div>

          <p className="text-xl font-semibold text-orange-500">
            ${singlebook.price}
          </p>
          <p className="text-gray-700">{singlebook.description}</p>

          {/* Purchase Section */}
          <div className="flex items-center gap-4 mt-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                <FiMinus />
              </button>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-12 text-center border-0 focus:ring-0"
              />
              <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                <FiPlus />
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600">
              <BsCartCheck />
              Buy Now
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MdLocalShipping className="text-green-500 text-xl" />
              <p>
                Free Delivery: Check your postal code for delivery availability.
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineReplay className="text-blue-500 text-xl" />
              <p>Return Delivery: Free 30 Days Delivery Returns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Related Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBooks.length > 0 ? (
            relatedBooks.map((item) => <BookCard item={item} key={item.id} />)
          ) : (
            <p className="text-gray-600">No related books found.</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SingleBook;
