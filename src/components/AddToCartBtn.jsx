import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../Redux/bookSlice";
import toast from "react-hot-toast";
import { IoMdCheckmark } from "react-icons/io";

const AddToCartBtn = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.book.cart);
  const [existingBook, setExistingBook] = useState(null);

  useEffect(() => {
    if (item) {
      const availableBook = cart.find((book) => book.id === item.id);
      setExistingBook(availableBook);
    }
  }, [item, cart]);

  const handleAddToCart = () => {
    if (existingBook) {
      toast.error("This book is already in your cart");
    } else {
      dispatch(addTocart(item));
      toast.success("Book added to cart!");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="py-2 flex items-center text-center gap-2 mx-auto px-10 w-full bg-[#01B4FF] text-white font-medium rounded-full transition-colors duration-300"
    >
      {existingBook ? (
        <span className="flex items-center gap-3">
          added <IoMdCheckmark size={26} />
        </span>
      ) : (
        <span className="flex items-center gap-3">
          add To Cart <GoArrowUpRight />
        </span>
      )}
    </button>
  );
};

export default AddToCartBtn;
