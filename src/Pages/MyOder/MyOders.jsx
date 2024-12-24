import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MyOdersCard from "./MyOdersCard";

function MyOders() {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>

      <main className="w-11/12 mx-auto">
        <div className="my-10">
          <MyOdersCard />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyOders;
