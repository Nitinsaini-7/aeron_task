import React from "react";
import { insuranceServices } from "../assets/data";
import { ArrowRight } from "lucide-react";

const InsuranceServices = () => {
  return (
      <div className="text-center py-5 px-10 bg-gray-50">
        <h1 className="text-4xl font-semibold mb-10">
          We’re Giving all the <span className="text-orange-500">Insurance</span> Services to you
        </h1>

        <div className="grid md:grid-cols-3 gap-8  md:p-10">
          {insuranceServices.map((item, index) => (
            <div key={index} className=" shadow-lg rounded-md p-6 bg-white">
              <div className="bg-red-50 p-2 flex items-center justify-center">
                <img src={item.img} alt="" className="w-full h-52" />
              </div>
              <div className="py-2 space-y-4">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p>{item.text}</p>
                <p className="text-2xl font-medium flex items-center justify-center">
                  <ArrowRight />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default InsuranceServices;
