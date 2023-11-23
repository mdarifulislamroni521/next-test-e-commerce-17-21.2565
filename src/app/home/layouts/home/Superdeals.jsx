"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import ProductCard from "./superDeals/ProductCard";
const Superdeals = ({ products = [] }) => {
  const endDate = moment(
    new Date(new Date().setHours(new Date().getHours() + 24))
  );
  const [timeStamp, setTimeStamp] = useState({
    hours: "00",
    minuts: "00",
    seconds: "00",
  });
  const updateTimeStamp = async () => {
    const timeStampInterval = setInterval(() => {
      var duration = moment.duration(endDate.diff(new Date()));
      // var days = duration.days();
      var hours = duration.hours();
      var minutes = duration.minutes();
      var seconds = duration.seconds();

      setTimeStamp({
        hours: `${hours > 0 ? hours : "00"}`,
        minuts: `${minutes > 0 ? minutes : "00"}`,
        seconds: `${seconds > 0 ? seconds : "00"}`,
      });
      if (hours < 1 && minutes < 1 && seconds < 1) {
        clearInterval(timeStampInterval);
      }
    }, 1000);
  };
  useEffect(() => {
    console.log("use Effect");
    updateTimeStamp();
  }, []);

  return (
    <div className="w-full bg-color-primary  ">
      <div className="container bg-color-primary rounded-t -translate-y-10 pb-32 border-b border-color-grey-deep-light">
        {/* super deals header */}
        <div className="w-full p-5 pt-10 pb-10 relative">
          <div className="flex-col sm:flex-row flex gap-1 p-2 pt-5 pb-5 items-center justify-center relative">
            <h3 className="text-black text-3xl font-bold">Super Deals</h3>
            <div className="flex items-center gap-2 font-normal">
              <span className="text-xl pl-1 pr-1 font-thin">End in</span>
              <div className="flex items-center gap-1">
                <div className="bg-black flex flex-col items-center text-white w-12 h-12 rounded-md pt-1 pb-1">
                  <span className="text-s14 font-extrabold">
                    {timeStamp?.hours}
                  </span>
                  <span className="text-sm font-extrabold -mt-[2px]">HR</span>
                </div>
                <div className="bg-black flex flex-col items-center text-white w-12 h-12 rounded-md pt-1 pb-1">
                  <span className="text-s14 font-extrabold">
                    {timeStamp.minuts}
                  </span>
                  <span className="text-sm font-extrabold -mt-[2px]">MIN</span>
                </div>
                <div className="bg-color-yellow-deep flex flex-col items-center text-white w-12 h-12 rounded-md pt-1 pb-1">
                  <span className="text-s14 font-extrabold">
                    {timeStamp.seconds}
                  </span>
                  <span className="text-sm font-extrabold -mt-[2px]">SEC</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center h-full absolute top-0 right-5  text-color-orange-deep ">
              <a
                className=" text-s14 font-bold hover:underline border rounded pl-2 pr-2 hover:bg-color-orange-deep hover:text-white"
                href="/offers/superdeals"
              >
                View More
              </a>
            </div>
          </div>
        </div>
        {/* products */}
        <div className="w-full">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((item, index) => {
              return <ProductCard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superdeals;
