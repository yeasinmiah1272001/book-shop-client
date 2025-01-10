import React from "react";
import { navigation } from "../../constant";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  return (
    <div className=" border-b border-black p-2">
      <ul className="flex items-center justify-center gap-8 mt-2 mr-36 cursor-pointer ">
        {navigation.map((item, index) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `text-xl ${isActive ? "active text-blue-400 underline" : ""}`
            }
            key={index}
          >
            {item.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default BottomHeader;
