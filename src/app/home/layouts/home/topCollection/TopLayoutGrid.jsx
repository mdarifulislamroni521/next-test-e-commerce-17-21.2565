import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const TopLayoutGrid = ({ data = {} }) => {
  return (
    <div className="w-full h-auto ">
      <div className="w-full p-3 xl:p-5 xl:h-full bg-white shadow">
        <div className="w-full flex items-center justify-between">
          <h5 className="text-xl font-bold">{data.title}</h5>
          <a
            href={`${data.slugUrl}`}
            className="pl-2 pr-2 pt-1 pb-1 h-auto border rounded hover:bg-color-secondary hover:text-white"
          >
            <MdOutlineKeyboardArrowRight size={17} className="" />
          </a>
        </div>
        {/* grid */}
        <div className="grid grid-cols-2 gap-3 pt-8">
          {data.products.map((product, index) => {
            return (
              <a
                key={index}
                href="/product/123"
                className="bg-[#EFF7F9] w-full h-full pb-5 md800:pb-2  relative flex flex-col items-center"
              >
                <Image
                  alt=""
                  src={product.urls[0]}
                  width={150}
                  height={150}
                  style={{ width: "100%" }}
                />
                <p className="absolute bottom-3 p-1 font-extrabold left-0 w-full text-center text-sm">
                  {product.subCategory}
                </p>
              </a>
            );
          })}
        </div>
        {/*  */}
        <div className="pt-6">
          <a href="/" className="text-lg font-extrabold text-color-secondary">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLayoutGrid;
