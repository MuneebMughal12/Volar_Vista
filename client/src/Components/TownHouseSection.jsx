import React from "react";
import { motion } from "framer-motion";
import townHouseImage from "../assets/townHouseImage.png"; // replace with your image path

const features = [
  "A fully equipped Gym for a healthy lifestyle", 
  "Outdoor Swimming Pool & Lounge Decks to unwind in style",
  "Kids’ Play Area for joyful childhood moments",
  "Library & Pergola Sitting Zones for quiet reflection or social engagement",
  "Party Lawn & Open Sitting Spaces to bring the community together",
  "Dedicated Parking & Wide Internal Roads ensuring convenience and flow",
];

const TownHouseSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#142B2B] text-white min-h-screen w-full font-sans mb-1">

      {/* Left Content */}
      <div className="relative flex flex-col justify-start p-6 sm:p-10 lg:p-12 space-y-5">


        <div className="z-10   ">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">VALOR VISTA</h1>
            <p
              className="text-2xl lg:text-4xl mt-2"
              style={{
                textShadow:
                  "rgba(10, 189, 240, 0.298) 3px 3px 0px, rgba(254, 1, 1, 0.298) -3px -3px 0px",
              }}
            >
              REDEFINE YOUR LIFE STYLE
            </p>

            {/* Decorative Divider & Section Heading */}
            <p className=" tracking-widest text-xl mt-6 uppercase">
              Designed for Lifestyles <br /> of the Next Century
            </p>
            <h2 className="text-3xl sm:text-4xl  font-bold mt-2">TOWN HOUSES</h2>
            <hr className="border-yellow-500 w-28 mb-4 mt-1" />
          </div>

          {/* Section Descriptions */}
          <div className="space-y-5 text-sm leading-relaxed text-gray-200">
            <div>
              <p className="font-bold text-white text-2xl mb-1">About Valor Vista</p>
              <p className="text-base">
                Welcome to Valor Vista—an exclusive enclave of modern 3-bedroom villas thoughtfully
                designed to redefine luxury living in Ghana. Nestled in Kwabenya, Greater Accra,
                this gated community combines architectural excellence, curated lifestyle features,
                and serene green surroundings to deliver a truly elevated residential experience.
              </p>
            </div>

            <div>
              <p className="font-bold text-white text-2xl mb-1">Modern Villas with Purposeful Design</p>
              <p className="text-base">
                Type-1 & Type-2 Villas offer 3-bedroom layouts with private parking, open-plan living
                areas, rooftop terraces, and green courtyards—perfect for the modern family.
              </p>
            </div>

            <div>
              <p className="font-bold text-2xl text-white mb-1">Community-Centered Amenities</p>
              <ul className="list-disc list-inside mt-2">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-white text-lg"
                    style={{
                      textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Building Image */}
      <div className="relative">
        <motion.img
          src={townHouseImage}
          alt="Valor Vista Town Houses"
          className="w-full h-[100vh] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default TownHouseSection;
