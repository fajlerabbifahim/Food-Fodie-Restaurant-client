import { Link } from "react-router-dom";

function TopSellingFoodsCard({ food }) {
  return (
    <div>
      {" "}
      <div className="bg-white max-w-[350px] h-full shadow-lg rounded-lg overflow-hidden border-t-4 border-orange-500 transition hover:shadow-xl flex flex-col">
        {/* Image Section */}
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-44 object-cover"
        />

        {/* Content Section */}
        <div className="p-4 flex-grow">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            {food.name}
          </h2>
          <p className="text-orange-600 font-medium text-lg mb-1">
            ${food.price}
          </p>
          <p className="text-gray-500 text-sm italic">
            {food.shortDescription}
          </p>
        </div>

        {/* Details Button */}
        <div className="bg-orange-50 py-3 px-4">
          <Link to={`/singleFood/${food._id}`}>
            <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium py-2 px-4 w-full rounded transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopSellingFoodsCard;
