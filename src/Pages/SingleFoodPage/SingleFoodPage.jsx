import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function SingleFoodPage() {
  const food = useLoaderData();
  console.log(food.name);
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
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
          {/* Placeholder for Image Section */}
          <div className=" bg-gray-200 flex items-center justify-center rounded-t-lg">
            <img className="w-full h-64 object-cover" src={image} alt="" />
          </div>

          {/* Food Details */}
          <h1 className="text-3xl font-bold mt-4" style={{ color: "#212121" }}>
            {name}
          </h1>
          <h2 className="text-lg font-medium mt-2" style={{ color: "#757575" }}>
            {category}
          </h2>
          <p className="text-sm mt-2" style={{ color: "#757575" }}>
            <strong>Origin:</strong> {origin}
          </p>

          <p className="text-base mt-4" style={{ color: "#757575" }}>
            {shortDescription}
          </p>
          <p className="text-sm mt-2" style={{ color: "#757575" }}>
            <strong>Details:</strong> {details}
          </p>

          {/* Price and Availability */}
          <p
            className="text-lg font-semibold mt-4"
            style={{ color: "#212121" }}
          >
            Price: ${price}
          </p>
          <p className="text-sm mt-1" style={{ color: "#757575" }}>
            Available Quantity: {quantity}
          </p>
          <p className="text-sm mt-1" style={{ color: "#757575" }}>
            Sold: {sellCount}
          </p>

          {/* Button */}
          <button
            className="mt-6 px-4 py-2 text-white font-semibold rounded"
            style={{
              backgroundColor: "#FF5722",
            }}
          >
            <Link to={`/purchase/${_id}`}> Purchase</Link>
          </button>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SingleFoodPage;
