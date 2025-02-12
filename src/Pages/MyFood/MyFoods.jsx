import Navbar from "../../Components/Navbar";
import MyFoodCard from "./MyFoodCard";
import Footer from "../../Components/Footer";

function MyFoods() {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
        <MyFoodCard />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyFoods;
