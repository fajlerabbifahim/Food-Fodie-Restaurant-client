import Banner from "./Banner";
import TopSellingFoods from "./TopSellingFoods";
import OderStep from "../../Components/OderStep";
import CustomerReviews from "./CustomerReviews";
import GetOfferSection from "./GetOfferSection";

function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <main>
        {/* top selling foods */}
        <TopSellingFoods />

        {/* food odering step section  */}
        <section className="my-2">
          <OderStep />
        </section>

        {/* CustomerReviews section   */}
        <section>
          <CustomerReviews />
        </section>
        {/* Get Offer Mail  section   */}
        <section>
          <GetOfferSection />
        </section>
      </main>
    </div>
  );
}

export default Home;
