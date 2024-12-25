import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function MyFoodCard({ food }) {
  const { name, price, quantity, image, _id } = food;

  return (
    <div>
      <div className="flex items-center border border-gray-300 rounded-lg shadow-md p-4 w-full h-[200px] relative">
        {/* Left Side: Image */}
        <div className="w-1/4 h-full">
          <img
            src={image}
            alt="Sample Food"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Center: Name, Price, and Quantity */}
        <div className="flex-grow px-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">Price: ${price}</p>
          <p className="text-gray-600">Quantity: {quantity}</p>
        </div>

        {/* Right Top Corner: Update Button */}
        <div className="absolute top-2 right-2">
          <button className="flex items-center gap-1 bg-[#FF5722] text-white px-3 py-1 rounded-sm hover:bg-[#E64A19] transition">
            <Link
              to={`/myFoodUpdate/${_id}`}
              className="flex items-center gap-2"
            >
              {" "}
              <FaEdit />
              Update
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyFoodCard;
