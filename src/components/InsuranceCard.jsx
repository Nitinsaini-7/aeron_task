import React from "react";
import { insuranceProducts } from "../assets/data";
import { ArrowRight } from "lucide-react";

const InsuranceCard = () => {
  return (
    <>
      <div className="">
        <h1 className="text-4xl font-semibold text-center py-5">
          Click to buy an <span className="text-orange-500">Insurance</span>
        </h1>
      </div>
      <div className="relative min-h-screen bg-white overflow-hidden">
        {/* Wave Backgrounds */}
        <div className="absolute inset-0 -z-5">
          {/* Top Wave */}
          <svg
            className="absolute top-0 w-full h-auto"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,200 C300,100 600,300 900,200 C1050,150 1200,250 1200,250 L1200,0 L0,0 Z"
              fill="url(#gradient1)"
              fillOpacity="0.3"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bottom Wave */}
          <svg
            className="absolute bottom-0 w-full h-auto"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 C300,100 600,-100 900,0 C1050,50 1200,-50 1200,-50 L1200,200 L0,200 Z"
              fill="url(#gradient2)"
              fillOpacity="0.4"
            />
            <defs>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Insurance Cards Grid */}
        <div className="relative z-10 md:px-10 px-4 p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  md:p-8 md:gap-10">
            {insuranceProducts.map((item, index) => (
              <div
                key={index}
                className="bg-white flex rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 group"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-20 object-contain mb-4"
                  />
                  <p className="text-center font-medium">{item.title}</p>
                </div>
                <div className=" rounded-full flex items-center justify-center shadow-lg w-10 h-10 p-1">
                  <ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center relative pb-5">
          <button className="p-2 px-6 rounded-full bg-orange-500 text-white font-medium">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default InsuranceCard;
