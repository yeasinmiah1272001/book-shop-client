import React from "react";
import { FaCableCar, FaGift, FaHeart, FaTruck } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { TbHeartPlus } from "react-icons/tb";
import AddToCartBtn from "./AddToCartBtn";
import { Link } from "react-router-dom";

const BookCard = ({ item }) => {
  return (
    <div key={item.id} className="p-4 m-0 gap-6 w-full   ">
      <div className="rounded-lg h-[390px]  border border-gray-400 hover:shadow-lg shadow-md overflow-hidden transition group ">
        <Link to={`/singlebook/${item.id}`}>
          <img
            className="mx-auto object-contain duration-300 group-hover:scale-110 transition-transform h-44 w-full p-4"
            src={item.image_url}
            alt={item.title}
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {item.title}
          </h3>
          <h2 className="text-xl font-bold text-black">$ {item.price} +</h2>
        </div>
        <hr />
        <div className="flex items-center justify-between p-2">
          <div className="flex gap-3 items-center ml-2">
            <span>
              <FaTruck />
            </span>
            <span>Free Delevary</span>
          </div>
          <div className="flex gap-3 items-center ml-2">
            <span>
              <FaGift />
            </span>
            <span>Free gift</span>
          </div>
        </div>
        <hr />
        <div className="p-4 flex items-center gap-3">
          <AddToCartBtn item={item} />
          <button className="p-3 border border-[#01B4FF] rounded-full hover:bg-gray-100 transition-colors duration-300">
            <TbHeartPlus size={20} className="text-[#01B4FF]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
