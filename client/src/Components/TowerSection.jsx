import React from "react";
import { motion } from "framer-motion";
import Aboutbg from "../assets/volarsatictower.png";
import skydle from "../assets/skydle.png";

const TowerSection = () => {
  const features = [
    "State-of-the-Art Design",
    "Gated & Master-Planned Community",
    "  Paradise  Complex Location ",
    " Structural Design As per  Standard",
    "Authentic Firm Design Inn",
    "Monitoring by Design Inn",
    "Luxury Townhouses (3 Bed Units).",
    "Smart Drainage & Utility Provisioning.",
    " Future-Proof Design with Expansion Options",
    " Swimming pool & Outdoor Sitting Space ",
    "Fitness GYM ",
    "Kid Playing Area",
    "Double Porch for Each Unit",
    "Dedicated Vehicular & Pedestrian Circulation",
    " High-End Interior Layouts with Natural Light Flow",
  ];

  return (
    <div className="w-full">
      {/* Tower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#142B2B] text-white min-h-screen w-full">
         {/* left Side - Building Image */}
        <div className="relative">
          <motion.img
            src={Aboutbg}
            alt="VALOR VISTA"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        {/* Left Side - Features */}
        <div className="flex flex-col items-center justify-center p-6 lg:p-10 space-y-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold">VALOR VISTA</h1>
          <p
            className="text-2xl lg:text-4xl"
            style={{
              textShadow:
                "rgba(10, 189, 240, 0.298) 3px 3px 0px, rgba(254, 1, 1, 0.298) -3px -3px 0px",
            }}
          >
            REDEFINE YOUR LIFE STYLE
          </p>
          <ul className="mt-5 space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-white text-lg lg:text-xl flex items-center"
                style={{
                  textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
                }}
              >
                <span className="text-white mr-2">&#9670;</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        
      </div>

    

      {/* Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-16 py-10 items-center">
     

        {/* Right Left Side - Stats */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold"> A HORIZON OF ELEVATED LIVING </h2><br />
          <p className="text-lg sm:text-base font-semibold"> Crafted for the lifestyle of tomorrow, Valor Vista blends thoughtful spatial design with
            natural elegance. These luxury lodges and modern villas are not just homes—they are
            an expression of refined living. Designed with open-plan layouts, private green spaces,
            and panoramic rooftop views, each residence offers both functionality and aesthetice xcellence.</p><br />
          <p className="text-lg sm:text-base font-semibold">Every element of Valor Vista reflects a forward-thinking approach—balancing contemporary
            design with sustainable building practices. From energy-efficient planning to smart space
            utilization,
            the project minimizes environmental impact while maximizing everyday comfort.</p> <br />
          <p className="text-lg sm:text-base font-semibold"> Valor Vista stands as a modern residential masterpiece—where luxury meets simplicity,
            and community meets tranquility.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-6 text-lg font-semibold text-gray-900">
            {[
              { number: "9", label: "TOWN HOUSES" },
                  { number: "3", label: "3 Bed Apartments", type: "TYP-1" },
              { number: "6", label: "3 Bed Apartments", type: "TYP-2" },
              { number: "6", label: " PUBLIC SWIMMING  ", type: "POOL" },
              { number: "2", label: " KIDS PLAYING " , type: "AREA" },
              { number: "35", label: " FITNESS GYM" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl sm:text-4xl font-bold">{item.number}</p>
                
                <hr className="w-6 sm:w-8 border-t-2 border-gray-600 my-1" />
                <p className="text-base sm:text-lg font-semibold text-gray-500 uppercase">{item.label}</p>
                <p className="text-base sm:text-lg text-gray-500 uppercase">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
           {/* Left Right Side - Image */}
        <div className="w-full">
          <img src={skydle} alt="Engineers" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default TowerSection;
