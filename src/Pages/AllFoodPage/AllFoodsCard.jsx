import React from "react";
import { Link } from "react-router-dom";

function AllFoodsCard({ food }) {
  const {
    _id,
    name,
    image,
    category,
    price,
    quantity,
    sellCount,
    origin,
    shortDescription,
    details,
    addedBy: { userId, username },
    purchaseCount,
    addedDate,
  } = food;
  return (
    <div>
      <div className="bg-white max-w-[370px] h-full shadow-lg rounded-lg overflow-hidden border-t-4 border-orange-500 transition hover:shadow-xl flex flex-col">
        {/* Image Section */}
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        {/* Content Section */}
        <div className="p-5 flex-grow">
          <h2 className="text-xl font-semibold text-[#212121] mb-2">{name}</h2>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Origin:</span> {origin}
          </p>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Total Sells:</span> {sellCount}
          </p>
          <p className="text-[#757575] mb-1">
            <span className="font-medium">Price:</span> ${price}
          </p>
          <p className="text-gray-500 text-sm italic">{shortDescription}</p>
        </div>

        {/* Details Button */}
        <div className="bg-orange-50 py-4 px-4">
          <Link to={`/singleFood/${_id}`}>
            <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium py-2 px-4 w-full rounded-sm transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllFoodsCard;
