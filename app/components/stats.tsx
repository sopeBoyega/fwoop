import React from "react";
import { CheckCircle, BarChart, Clock, Users } from "lucide-react";

const stats = [
  { title: "Tasks Completed", value: 48, icon: <CheckCircle className="text-green-600" /> },
  { title: "Active Users", value: 123, icon: <Users className="text-green-600" /> },
  { title: "Progress", value: "75%", icon: <BarChart className="text-green-600" /> },
  { title: "Time Spent", value: "12 hrs", icon: <Clock className="text-green-600" /> },
];

const QuickStats = () => {
  return (
    <div className="space-y-4 p-5 rounded-xl bg-gradient-to-br from-white to-green-50 shadow-lg backdrop-blur-md">
      {/* Intro Text */}
      <p className="text-lg text-gray-700 text-center italic">
        Quick stats of <span className="font-medium text-green-700">effects in Nigeria</span> and the <span className="font-medium text-green-700">drive of the project</span>
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white bg-opacity-80 hover:bg-green-50 transition-all duration-300 shadow-md border border-green-100"
          >
            <div className="p-2 bg-green-100 rounded-full mb-2">
              {stat.icon}
            </div>
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-green-700">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
