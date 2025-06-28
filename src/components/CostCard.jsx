import React, { useEffect } from "react";
import { costCart } from "../assets/data";
import AOS from "aos";
import "aos/dist/aos.css";

const CostCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className=" bg-gray-50 my-10 md:px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-5">
        {costCart.map((item, index) => (
          <div key={index} data-aos="fade-up" className="p-5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-md">
            <div className="flex">
              <div className="md:bg-red-50 flex items-center justify-center w-10 rounded-full p-1">
                <img src={item.img} alt="" />
              </div>
              <p className=" text-sm text-center">{item.text}</p>
            </div>

            <div className="flex items-center justify-center mt-2">
              <button className="bg-blue-500 rounded-md py-1 text-sm w-full text-white">
                {item.cost}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostCard;
