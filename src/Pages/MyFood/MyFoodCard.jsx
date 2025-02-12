import axios from "axios";
import { useState } from "react";

import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function MyFoodCard() {
  const foodsData = useLoaderData();
  const [foods, setFoods] = useState(foodsData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://food-foodie-server.vercel.app/deleteFood/${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
              setFoods(foods.filter((food) => food._id !== id));
            }
          });
      }
    });
  };

  return (
    <div>
      {foods.length > 0 ? (
        foods.map((food) => (
          <div
            key={food._id}
            className=" my-10 flex items-center border border-gray-300 rounded-lg shadow-md p-4 w-full h-[200px] relative"
          >
            {/* Left Side: Image */}
            <div className="w-1/4 h-full">
              <img
                src={food.image}
                alt="Sample Food"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Center: Name, Price, and Quantity */}
            <div className="flex-grow px-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {food.name}
              </h3>
              <p className="text-gray-600">Price: ${food.price}</p>
              <p className="text-gray-600">Quantity: {food.quantity}</p>
            </div>

            {/* Right Top Corner: Update Button */}
            <div className="absolute top-2 right-2">
              <button className="flex items-center gap-1 bg-[#FF5722] text-white px-3 py-1 rounded-sm hover:bg-[#E64A19] transition">
                <Link
                  to={`/myFoodUpdate/${food._id}`}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <FaEdit />
                  Update
                </Link>
              </button>
              <div className="flex items-center gap-1 bg-red-600 mt-2 text-white px-4 py-1 rounded-sm hover:bg-red-500 transition">
                <button
                  onClick={() => handleDelete(food._id)}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 my-28 font-bold">
          No Food Added Yet
        </p>
      )}
    </div>
  );
}

export default MyFoodCard;
