import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Dropdown Arrow Icon
import Navbar from "../../Components/Navbar";
import allFoodPageBanner from "../../assets/all-food/all-food-page-banner.jpg";
import AllFoodsCard from "./AllFoodsCard";
import Footer from "../../Components/Footer";

function AllFoods() {
  const allFoods = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown Toggle State

  // Search Filtering
  const filteredFoods = allFoods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting Logic
  const sortedFoods = [...filteredFoods].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main>
        {/* Banner Section */}
        <section className="relative bg-[#FF5722] text-white h-[200px] md:h-[250px] flex items-center justify-center">
          <img
            src={allFoodPageBanner}
            alt="All Foods Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 text-center w-11/12 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Savor Every Bite!
            </h1>
            <p className="text-sm md:text-base mt-2 text-gray-300 italic">
              Find your favorite food here!
            </p>
            <div className="flex items-center mt-4 bg-white rounded-full px-4 py-2 shadow-md">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search your favorite food..."
                className="flex-grow text-gray-700 text-sm md:text-base outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-[#FF5722] text-white px-4 py-2 rounded-full text-sm font-semibold ml-2">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Sorting & Food List Section */}
        <section className="w-11/12 mx-auto mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="underline text-2xl font-semibold text-gray-500">
              All Foods
            </h2>

            {/* Sorting Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-[#FF5722] text-white font-semibold rounded-md shadow-md hover:bg-[#E64A19] transition"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Sort by Price <FaChevronDown />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    <li
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        sortOrder === "lowToHigh"
                          ? "bg-gray-200 font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setSortOrder("lowToHigh");
                        setDropdownOpen(false);
                      }}
                    >
                      Low to High
                    </li>
                    <li
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        sortOrder === "highToLow"
                          ? "bg-gray-200 font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setSortOrder("highToLow");
                        setDropdownOpen(false);
                      }}
                    >
                      High to Low
                    </li>
                    <li
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        sortOrder === "default"
                          ? "bg-gray-200 font-semibold"
                          : ""
                      }`}
                      onClick={() => {
                        setSortOrder("default");
                        setDropdownOpen(false);
                      }}
                    >
                      Reset
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* All Foods Grid system */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedFoods.length > 0 ? (
              sortedFoods.map((food) => (
                <AllFoodsCard key={food._id} food={food} />
              ))
            ) : (
              <p className="text-center mb-10 text-gray-500 col-span-full">
                No foods found matching your search.
              </p>
            )}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AllFoods;
