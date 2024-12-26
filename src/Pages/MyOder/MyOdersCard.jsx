import axios from "axios";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function MyOdersCard() {
  const myOder = useLoaderData();

  const [oderCard, setOderCard] = useState(myOder);
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
          .delete(`https://food-foodie-server.vercel.app/deleteOrder/${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const newOderCard = oderCard.filter((food) => food._id !== id);
              setOderCard(newOderCard);
            }
          });
      }
    });
  };

  return (
    <div>
      {oderCard.length > 0 ? (
        oderCard.map((food) => (
          <div
            key={food._id}
            className=" my-2 flex items-center bg-white shadow-lg rounded-lg p-4 h-48 w-full relative border border-gray-200"
          >
            {/* Left Side: Image */}
            <div className="w-1/4 h-full">
              <img
                src={food.image}
                alt="Burger Deluxe"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>

            {/* Center: Details */}
            <div className="flex-1 px-4">
              <h2 className="text-xl font-bold text-gray-800">
                {food.food_name}
              </h2>
              <p className="text-gray-800  font-semibold">
                Food Owner: {food.foodOwner}
              </p>
              <p className="text-gray-600">Price: {food.price}</p>
              <p className="text-gray-600">Purchase Date: {food.currentDate}</p>
              <p className="text-gray-600">Quantity: {food.selectedQuantity}</p>
            </div>

            {/* Right Top Corner: Delete Button */}
            <button
              onClick={() => handleDelete(food._id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              aria-label="Delete"
            >
              <FaTrash size={18} />
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 my-28 font-bold">
          No Food Ordered Yet
        </p>
      )}
    </div>
  );
}

export default MyOdersCard;
