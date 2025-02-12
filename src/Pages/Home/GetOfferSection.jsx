const GetOfferSection = () => {
  return (
    <div className="bg-[#FFF3E0] text-[#333] py-10 px-6 text-center rounded-lg mx-auto my-28 ">
      <h2 className="text-2xl font-bold mb-2 text-[#D84315]">
        Get Exclusive Offers!
      </h2>
      <p className="text-sm mb-5 text-[#5D4037]">
        Subscribe with your email and never miss a deal.
      </p>

      <div className="flex items-center bg-white rounded-md overflow-hidden border border-[#FFAB40] max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 border-none text-gray-700 focus:outline-none"
        />
        <button className="bg-[#FF6F00] hover:bg-[#E65100] text-white px-5 py-2 font-medium transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default GetOfferSection;
