import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function PurchasePage() {
  const { user } = useAuth();
  const food = useLoaderData();
  const currentDate = moment().format("MMMM DD, YYYY HH:mm");
  const navigate = useNavigate();
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
    addedBy,
    purchaseCount,
    addedDate,
  } = food;

  const foodOwner = addedBy.name;

  const [availableQuantity, setAvailableQuantity] = useState(quantity - 1);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [sellCountValue, setSellCountValue] = useState(sellCount);

  const selectQuantityIncrease = () => {
    if (selectedQuantity < 20 && availableQuantity > 0) {
      setSelectedQuantity(selectedQuantity + 1);
      setAvailableQuantity(availableQuantity - 1);
      setSellCountValue(sellCountValue + 1);
    }
  };

  const selectQuantityDecrease = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
      setAvailableQuantity(availableQuantity + 1);
      setSellCountValue(sellCountValue - 1);
    }
  };

  const handlePurchase = (e) => {
    e.preventDefault();

    if (addedBy.email === user.email) {
      return Swal.fire({
        title: "Cancelled",
        text: "You don't Purchase your own Food :)",
        icon: "error",
      });
    }

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const purchaseData = {
      ...initialData,
      selectedQuantity,
      currentDate,
      image,
      foodOwner,
    };

    axios
      .post("https://food-foodie-server.vercel.app/purchase", purchaseData)
      .then((response) => {
        updatedFood();
      })
      .catch((error) => {
        console.error("Error posting purchase data:", error);
      });
  };

  const updatedFood = () => {
    const updatedFoodData = {
      sellCount: sellCountValue,
      quantity: availableQuantity,
    };

    axios
      .patch(
        `https://food-foodie-server.vercel.app/updateFood/${_id}`,
        updatedFoodData
      )
      .then((response) => {
        if (response.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Food Purchased successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myorders");
      })
      .catch((error) => {
        console.error("Error updating food data:", error);
      });
  };

  return (
    <>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              {/* Left Side: Image */}
              <div>
                <img
                  src={image}
                  alt={name}
                  name="image"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              {/* Right Side: Form */}
              <div>
                <h2 className="font-semibold text-xl text-gray-600 mb-4">
                  Food Order Form
                </h2>
                <p className="text-gray-500 mb-6">
                  Please provide the details to place your order.
                </p>

                <form
                  onSubmit={handlePurchase}
                  className="bg-white rounded shadow-lg p-4 px-4 md:p-8"
                >
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
                    <div>
                      <label
                        htmlFor="food_name"
                        className="block text-gray-600"
                      >
                        Food Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        name="food_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter the food name"
                      />
                    </div>

                    <div>
                      <label htmlFor="price" className="block text-gray-600">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        value={price}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Enter the price"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="available_quantity"
                        className="block text-gray-600"
                      >
                        Available Quantity
                      </label>
                      <input
                        type="text"
                        name="available_quantity"
                        readOnly
                        value={availableQuantity}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-gray-600">
                        Quantity
                      </label>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={selectQuantityDecrease} // Add decrease functionality
                          className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-lg">{selectedQuantity}</span>{" "}
                        {/* Example: Replace with state-based quantity */}
                        <button
                          type="button"
                          onClick={selectQuantityIncrease} // Add increase functionality
                          className="bg-gray-200 text-gray-600 px-3 py-1 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-600">Buyer Name</label>
                      <input
                        type="text"
                        value={user?.displayName}
                        name="buyer_name"
                        readOnly
                        className="w-full h-10 px-4 border rounded bg-gray-200"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-600">Buyer Email</label>
                      <input
                        type="email"
                        value={user?.email}
                        name="buyer_email"
                        readOnly
                        className="w-full h-10 px-4 border rounded bg-gray-200"
                      />
                    </div>
                    <div className="hidden">
                      <label className="block text-sm text-gray-600">
                        Purchase Date
                      </label>
                      <input
                        type="text"
                        value={currentDate}
                        className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
                        readOnly
                      />
                    </div>

                    <div>
                      <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-medium py-2 px-4 w-full rounded-sm transition duration-300">
                        Confirm Purchase
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PurchasePage;
