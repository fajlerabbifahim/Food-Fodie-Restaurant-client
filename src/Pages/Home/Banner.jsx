import React from "react";
import bannerBurgerImage from "../../assets/banner-burger-image.jpg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div>
      <div className="relative h-[400px] w-full">
        {/* Background Image */}
        <img
          src={bannerBurgerImage} // Replace with your image URL
          alt="Banner"
          className="w-full h-full object-cover rounded-sm"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4  ">Welcome to Food Foodie</h1>
          <p className="text-lg mb-6">
            Savor flavors, crafted with love! Food Foodie—where every bite is
            pure joy.
          </p>
          <button className="bg-[#FF5722] text-white hover:bg-[#E64A19] px-6 py-2 rounded-sm shadow-md font-semibold">
            <Link to="/allFoods">All Foods</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
