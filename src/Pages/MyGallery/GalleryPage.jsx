import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bannerImage from "../../assets/all-food/gallery-page-banner.jpg";
import GalleryImage from "./GalleryImage";

function GalleryPage() {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main>
        {/* Banner Section */}
        <section className="relative bg-[#FF5722] text-white h-[200px] md:h-[250px] flex items-center justify-center">
          <img
            src={bannerImage}
            alt="All Foods Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 text-center w-11/12 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Gastronomic Gallery
            </h1>
            <p className="text-sm md:text-base mt-2 text-gray-300 italic">
              Explore the Art of Food Through Our Lens
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-11/12 mx-auto mt-10">
          <GalleryImage />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default GalleryPage;
