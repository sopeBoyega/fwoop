"use client"
import React from "react";
import CountUp from "react-countup";
import { GraduationCap, Presentation} from "lucide-react";

const impactData = [
  {
    label: "Students Reached",
    value: 200,
    suffix: "+",
    icon: <GraduationCap className="text-green-600" />,
  },
  {
    label: "Workshops Held",
    value: 1,
    icon: <Presentation className="text-green-600" />,
  },
  // {
  //   label: "Compost Generated",
  //   value: null,
  //   suffix: " Tons",
  //   icon: <Leaf className="text-green-600" />,
  // },
];

const ImpactStats = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-white to-green-50 rounded-xl shadow-md space-y-6">
      <p className="text-center text-green-700 font-semibold text-lg">
        Our Impact So Far 🌱
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-center">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm hover:bg-green-50 transition"
          >
            <div className="flex justify-center mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                {item.icon}
              </div>
            </div>
            <p className="text-3xl font-bold text-green-700">
              <CountUp
                end={item.value}
                duration={2}
                decimals={item.value % 1 !== 0 ? 1 : 0}
                suffix={item.suffix || ""}
              />
            </p>
            <p className="text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
