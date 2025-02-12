import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import TopSellingFoodsCard from "./TopSellingFoodsCard";

function TopSellingFoods() {
  const topSellingFoods = useLoaderData();
  return (
    <div>
      <div className="bg-[#FFF8E1] text-white py-10 px-5  ">
        {/* Top Selling Banner */}
        <div className="text-center ">
          <h1 className="text-4xl font-bold mb-4 text-[#212121]">
            Top Selling Foods
          </h1>
          <p className="text-lg text-[#757575]">
            Discover our best-selling dishes loved by food enthusiasts
            worldwide.
          </p>
        </div>
        {/* Top Selling Foods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-11/12 mx-auto">
          {topSellingFoods.map((food) => (
            <TopSellingFoodsCard key={food._id} food={food} />
          ))}
        </div>

        {/* View All Foods Button */}
        <div className="text-center mt-10">
          <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-2 rounded-sm shadow-md font-semibold">
            <Link to="/allFoods">View All Foods</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSellingFoods;
