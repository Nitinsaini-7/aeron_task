import React from "react";
import { howWeWorkData } from "../assets/data";
import CostCard from "./CostCard";

const HowWeWorks = () => {
  return (
    <div className="">
      <div className="py-5 px-10 md:px-20">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-semibold mb-4">
            <span className="text-gray-900">How We</span>{" "}
            <span className="text-orange-500">Works?</span>{" "}
          </h1>
        </div>
        <div className=" grid md:grid-cols-3 gap-8">
          {howWeWorkData.map((item, index) => (
            <div key={index} className="p-2">
              <div className=" flex items-center justify-center">
                <img src={item.img} alt="" className="w-28 h-28" />
              </div>
              <div className=" text-center space-y-3">
                <h3 className=" font-medium text-lg">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CostCard />
    </div>
  );
};

export default HowWeWorks;
