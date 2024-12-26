import React from "react";
import {
  FaHamburger,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaUtensils,
} from "react-icons/fa";

function OderStep() {
  const steps = [
    {
      id: 1,
      icon: <FaMapMarkerAlt size={50} className="text-gray-700" />,
      title: "Choose your location",
    },
    {
      id: 2,
      icon: <FaUtensils size={50} className="text-gray-700" />,
      title: "Choose restaurant",
    },
    {
      id: 3,
      icon: <FaHamburger size={50} className="text-gray-700" />,
      title: "Make your order",
    },
    {
      id: 4,
      icon: <FaMotorcycle size={50} className="text-gray-700" />,
      title: "Food is on the way",
    },
  ];
  return (
    <div className="bg-gray-50 py-10">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-2">
        GET YOUR FOOD FAST & EASY
      </h1>
      <p className="text-center text-gray-600 mb-8">Follow the Steps</p>
      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center space-y-4"
          >
            {step.icon}

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5722] text-white text-xl font-bold">
              {step.id}
            </div>
            <p className="text-gray-700 font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OderStep;
