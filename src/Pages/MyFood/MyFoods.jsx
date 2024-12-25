import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import MyFoodCard from "./MyFoodCard";
import Footer from "../../Components/Footer";

function MyFoods() {
  const foods = useLoaderData();
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        {foods.length > 0 ? (
          foods.map((food) => <MyFoodCard key={food._id} food={food} />)
        ) : (
          <p className="text-center text-gray-500 my-28 font-bold">
            No Food Added Yet
          </p>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyFoods;
