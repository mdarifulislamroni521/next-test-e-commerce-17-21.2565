"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import BestProductCard from "./bestSelling/BestProductCard";

const Bestselling = ({ sellings = [] }) => {
  const [selected, setSelected] = useState("bestSelling");
  const [filtered, setFiltered] = useState(sellings[`${selected}`]);

  const filterProduct = (selectTag) => {
    setSelected(selectTag);
    setFiltered(sellings[`${selectTag}`]);
  };
  return (
    <div className="w-full pt-10 pb-10">
      <div className="container">
        {/* top collection header */}
        <div className="w-full flex flex-col items-center border-bottom-img pb-5">
          <span className="text-color-orange-deep text-sm font-bold">
            EXCLUSIVE COLLECTION
          </span>
          <h1 className="text-5xl font-extrabold text-black pt-3 pb-3">
            BEST SELLING PRODUCTS
          </h1>
        </div>
        {/* selection  */}
        <div className="w-fit m-auto pb-7">
          <ul className="flex gap-1 w-fit items-center justify-center bg-[#f7f7f5] rounded-full p-1 pl-4 pr-4">
            <li
              onClick={() => filterProduct("bestSelling")}
              className={`${
                selected === "bestSelling" ? "text-color-orange-deep" : ""
              } cursor-pointer p-3 font-extrabold text-s14 hover:text-color-orange-deep duration-300`}
            >
              BEST SELLINGS
            </li>
            <li
              onClick={() => filterProduct("featured")}
              className={`${
                selected === "featured" ? "text-color-orange-deep" : ""
              } cursor-pointer p-3 font-extrabold text-s14 hover:text-color-orange-deep duration-300`}
            >
              FEATURED
            </li>
            <li
              onClick={() => filterProduct("hotsell")}
              className={`${
                selected === "hotsell" ? "text-color-orange-deep" : ""
              } cursor-pointer p-3 font-extrabold text-s14 hover:text-color-orange-deep duration-300`}
            >
              HOT SELL
            </li>
            <li
              onClick={() => filterProduct("trend")}
              className={`${
                selected === "trend" ? "text-color-orange-deep" : ""
              } cursor-pointer p-3 font-extrabold text-s14 hover:text-color-orange-deep duration-300`}
            >
              TREND
            </li>
          </ul>
        </div>
        {/* body */}
        <div className="flex gap-3">
          {/* child nodes */}
          <div className="w-1/5 hidden md:block">
            <Image
              alt=""
              src={sellings.banner}
              width={200}
              height={700}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* products */}
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md1k:grid-cols-4 w-full relative">
            <AnimatePresence>
              {filtered.map((product, index) => {
                return <BestProductCard data={product} key={index} />;
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestselling;
