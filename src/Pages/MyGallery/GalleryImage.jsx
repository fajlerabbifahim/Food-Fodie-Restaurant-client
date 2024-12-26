import React from "react";
import img1 from "../../assets/GalleryImage/image (1).jpg";
import img2 from "../../assets/GalleryImage/image (2).jpg";
import img3 from "../../assets/GalleryImage/image (3).jpg";
import img4 from "../../assets/GalleryImage/image (4).jpg";
import img5 from "../../assets/GalleryImage/image (5).jpg";
import img6 from "../../assets/GalleryImage/image (6).jpg";
import img7 from "../../assets/GalleryImage/image (7).jpg";
import img8 from "../../assets/GalleryImage/image (8).jpg";
import img9 from "../../assets/GalleryImage/image (9).jpg";
import img10 from "../../assets/GalleryImage/image (10).jpg";
import img11 from "../../assets/GalleryImage/image (11).jpg";
import img12 from "../../assets/GalleryImage/image (12).jpg";

const Gallery = () => {
  const images = [
    { src: img1, name: "Fajle Rabbi Fahim" },
    { src: img2, name: "Kazi Nazrul Islam" },
    { src: img3, name: "Al Rafi " },
    { src: img4, name: "Lalon Fakir" },
    { src: img5, name: "Sohanur Rahman" },
    { src: img6, name: "Fazlul Haque" },
    { src: img7, name: "Zahir Raihan" },
    { src: img8, name: "Humayun Ahmed" },
    { src: img9, name: "Apu Biswas" },
    { src: img10, name: "Shakib Khan" },
    { src: img11, name: "Shah Rukh Khan" },
    { src: img12, name: "Tony Stark" },
  ];

  return (
    <div className=" min-h-screen ">
      <h1 className="text-4xl font-semibold text-gray-500 underline text-center mb-8">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-medium">{image.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
