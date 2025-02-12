import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

function AddFood() {
  const { user } = useAuth();
  const addedBy = {
    name: user?.displayName,
    email: user?.email,
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const initialData = Object.fromEntries(fromData.entries());
    const foodData = {
      ...initialData,
      price: parseFloat(initialData.price),
      quantity: parseInt(initialData.quantity),
      sellCount: parseInt(initialData.sellCount),
      addedBy,
    };
    console.log(foodData);

    axios.post("http://localhost:5000/addFood", foodData).then((res) => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Food Added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      }
    });
  };

  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <div className="p-10 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
          <h1
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: "#212121" }}
          >
            Add Food Item
          </h1>
          <form onSubmit={handleAddFood} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-6 py-3 border border-[#c29b8f] rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="w-full px-6 py-3 border border-[#c29b8f]  rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="w-full px-6 py-3 border border-[#c29b8f]  rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full px-6 py-3 border border-[#c29b8f]  rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="w-full px-6 py-3 border border-[#c29b8f]  rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
              <input
                type="number"
                name="sellCount"
                value={0}
                placeholder="Sell Count"
                className="w-full px-6 py-3 border border-[#c29b8f]  rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                type="text"
                name="origin"
                placeholder="Origin"
                className="w-full px-6 py-3 border border-[#c29b8f]  rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
              />
            </div>
            <textarea
              placeholder="Short Description"
              name="description"
              className="w-full px-6 py-3 border border-[#c29b8f] rounded-sm text-[#757575] focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-transparent"
            ></textarea>

            <button className="w-full bg-[#FF5722]  text-white py-3 px-6 rounded-sm font-semibold hover:bg-[#E64A19] focus:ring-1 focus:ring-[#FFC107] focus:outline-none transition duration-300">
              Add Food
            </button>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AddFood;
