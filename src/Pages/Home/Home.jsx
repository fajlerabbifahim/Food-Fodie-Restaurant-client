import React from "react";
import Banner from "./Banner";
import TopSellingFoods from "./TopSellingFoods";

function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <main>
        {/* top selling foods */}
        <TopSellingFoods />
      </main>
    </div>
  );
}

export default Home;
