import React from "react";

const sponsors = [
  { name: "NGGA", img: "https://via.placeholder.com/100" },
  { name: "Eselecious", img: "https://via.placeholder.com/100" },
  { name: "Lagos Ministry of Education", img: "https://via.placeholder.com/100" },
  { name: "Farmer", img: "https://via.placeholder.com/100" },
];

const SponsorsSection = () => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md text-center space-y-6">
      {/* Header */}
      <h2 className="text-green-700 text-lg md:text-xl font-semibold">
        Proudly Sponsored By
      </h2>

      {/* Avatars */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={sponsor.img}
              alt=""
              className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
            />
            <p className="text-sm text-gray-700">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
