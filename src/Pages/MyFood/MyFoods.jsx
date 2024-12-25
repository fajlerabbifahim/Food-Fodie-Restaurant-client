import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import MyFoodCard from "./MyFoodCard";

function MyFoods() {
  const foods = useLoaderData();
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        {foods.map((food) => (
          <MyFoodCard key={food._id} food={food} />
        ))}
      </main>
    </div>
  );
}

export default MyFoods;
