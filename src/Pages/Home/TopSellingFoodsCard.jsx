import React from "react";
import { Link } from "react-router-dom";

function TopSellingFoodsCard({ food }) {
  return (
    <div>
      {" "}
      <div className="bg-white max-w-[370px] h-full shadow-lg rounded-lg overflow-hidden border-t-4 border-orange-500 transition hover:shadow-xl flex flex-col">
        {/* Image Section */}
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover"
        />

        {/* Content Section */}
        <div className="p-5 flex-grow">
          <h2 className="text-xl font-semibold text-[#212121] mb-2">
            {food.name}
          </h2>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Category:</span> {food.category}
          </p>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Origin:</span> {food.origin}
          </p>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Total Sells:</span> {food.sellCount}
          </p>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Price:</span> ${food.price.toFixed(2)}
          </p>
          <p className="text-gray-500 text-sm italic">
            {food.shortDescription}
          </p>
        </div>

        {/* Details Button */}
        <div className="bg-orange-50 py-4 px-4">
          <Link to={`/singleFood/${food._id}`}>
            <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium py-2 px-4 w-full rounded-sm transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopSellingFoodsCard;
