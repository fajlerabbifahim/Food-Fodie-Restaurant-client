import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import reviewBG from "../../assets/all-food/review-bg.jpg";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      review:
        "Amazing service! The food was absolutely delicious and the delivery was super fast.",
    },
    {
      name: "Jane Smith",
      review:
        "Great experience! The quality of the food and the packaging was excellent.",
    },
    {
      name: "Alice Johnson",
      review:
        "Highly recommend! Everything was perfect, from taste to service.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${reviewBG})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Swiper Container */}
      <div className="relative z-10 w-full max-w-2xl p-6">
        <h2 className="text-4xl text-center font-bold text-white mb-8">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="p-4"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white bg-opacity-30 backdrop-blur-sm p-8 rounded-lg shadow-lg text-center"
                style={{
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p className="text-lg italic mb-4 text-gray-200">
                  "{review.review}"
                </p>
                <h4 className="text-xl font-bold text-white">
                  - {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
