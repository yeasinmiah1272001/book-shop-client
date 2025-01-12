import React from "react";

import logo from "../../assets/logo.png";

// Import Font Awesome icons
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const TopHeader = () => {
  const cart = useSelector((state) => state.book.cart);
  return (
    <div>
      <div className="flex justify-center items-center py-1 border-b border-black">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Logo" className="h-[90px]" />
        </div>

        {/* Search Bar with Icon */}
        <div className="flex w-1/2 mx-4 relative">
          <input
            type="text"
            placeholder="Search for products, categories..."
            className="w-full p-3 pl-4 pr-14 border border-gray-300 rounded-lg shadow-sm outline-none"
          />
          <button
            type="button"
            className="absolute top-1/2 right-0.5 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            🔍
          </button>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-6 text-base font-medium text-gray-800">
            <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer transition duration-200 ease-in-out">
              <FaUser className="text-gray-600" />
              <span>Account</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer transition duration-200 ease-in-out">
              <FaShoppingCart className="text-gray-600" />
              <span className="text-red-400">
                Cart ({cart.length ? cart.length : 0})
              </span>
            </li>
            <li className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer transition duration-200 ease-in-out">
              <FaHeart className="text-gray-600" />
              <span>Wishlist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
