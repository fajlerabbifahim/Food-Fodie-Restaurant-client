import React from "react";
import Banner from "./Banner";
import TopSellingFoods from "./TopSellingFoods";
import OderStep from "../../Components/OderStep";

function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <main>
        {/* top selling foods */}
        <TopSellingFoods />

        <section className="my-2">
          <OderStep />
        </section>
      </main>
    </div>
  );
}

export default Home;
