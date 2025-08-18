import React from "react";
import Image from "next/image";

const sponsors = [
  { name: "NGGA", img: "/ngga.jpg" },
  { name: "Eselecious", img: "/Esefoods.jpg" },
];

const SponsorsSection = () => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md text-center space-y-6">
      {/* Header */}
      <h2 className="text-green-700 text-lg md:text-xl font-semibold">
        Proudly Sponsored By
      </h2>

      {/* Avatars */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 justify-items-center">
        {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
            <Image
              src={sponsor.img}
              alt={sponsor.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
            />
            <p className="text-sm text-gray-700 font-bold">{sponsor.name}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
