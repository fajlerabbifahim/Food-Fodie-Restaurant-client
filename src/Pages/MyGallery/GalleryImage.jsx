import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Import ALL STATIC images
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

function GalleryImage() {
  return (
    // <div className="p-4">
    //   {/* LightGallery Wrapper */}
    //   <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
    //     {/* Grid Container */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //       {/* Individual Gallery Items */}
    //       <a href={img1} data-src={img1} className="rounded overflow-hidden">
    //         <img
    //           src={img1}
    //           alt="Gallery Image 1"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img2} data-src={img2} className="rounded overflow-hidden">
    //         <img
    //           src={img2}
    //           alt="Gallery Image 2"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img3} data-src={img3} className="rounded overflow-hidden">
    //         <img
    //           src={img3}
    //           alt="Gallery Image 3"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img4} data-src={img4} className="rounded overflow-hidden">
    //         <img
    //           src={img4}
    //           alt="Gallery Image 4"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img5} data-src={img5} className="rounded overflow-hidden">
    //         <img
    //           src={img5}
    //           alt="Gallery Image 5"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img6} data-src={img6} className="rounded overflow-hidden">
    //         <img
    //           src={img6}
    //           alt="Gallery Image 6"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img7} data-src={img7} className="rounded overflow-hidden">
    //         <img
    //           src={img7}
    //           alt="Gallery Image 7"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img8} data-src={img8} className="rounded overflow-hidden">
    //         <img
    //           src={img8}
    //           alt="Gallery Image 8"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img9} data-src={img9} className="rounded overflow-hidden">
    //         <img
    //           src={img9}
    //           alt="Gallery Image 9"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href={img10} data-src={img10} className="rounded overflow-hidden">
    //         <img
    //           src={img10}
    //           alt="Gallery Image 10"
    //           className="w-full h-full object-cover"
    //         />
    //       </a>
    //       <a href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg">
    //         <img
    //           alt="img1"
    //           src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    //         />
    //       </a>
    //     </div>
    //   </LightGallery>
    // </div>
    <div className="p-4">
      {/* LightGallery Wrapper */}
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {/* Grid Container */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Individual Gallery Items */}
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map(
            (image, index) => (
              <a
                href={image}
                data-src={image}
                key={index}
                className="rounded overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            )
          )}
          {/* Extra Item */}
        </div>
        <a
          href="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          className="rounded overflow-hidden"
        >
          <img
            alt="img1"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            className="w-full h-full object-cover"
          />
        </a>
      </LightGallery>
    </div>
  );
}

export default GalleryImage;
