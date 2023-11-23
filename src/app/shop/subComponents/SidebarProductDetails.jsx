"use client";
import React, { useState } from "react";

const SidebarProductDetails = ({ data = {} }) => {
  const [Sbrand, setSbrand] = useState("");
  const [Ssize, setSsize] = useState("");
  const [Scolor, setScolor] = useState("");
  return (
    <div className="w-full rounded-sm shadow-sm bg-color-primary p-3 pl-4 pr-4 pb-7">
      {/* brands */}
      <h3 className="font-bold text-s14">PRODUCT BRAND</h3>
      <div className="w-full relative -mt-1 pb-7 pt-2 block border-b border-dashed">
        {data?.brands?.map((brand, index) => {
          return (
            <div key={index} className="w-full block pt-1">
              <label className="cursor-pointer relative block w-max">
                <div className="w-full flex items-center gap-2">
                  <input
                    checked={Sbrand === brand}
                    type="checkbox"
                    className="h-0 w-0 block opacity-0 peer"
                    onChange={(e) => {
                      if (Sbrand === brand) {
                        setSbrand("");
                      } else {
                        setSbrand(e.target.checked ? brand : "");
                      }
                    }}
                  />
                  <span className="w-3 h-3 border-2 rounded-full bg-color-primary border-color-grey-deep peer-checked:bg-color-orange-deep peer-checked:border-color-orange-deep"></span>
                  <h6 className="text-color-grey-deep text-sm peer-checked:text-color-orange-deep">
                    {brand}
                  </h6>
                </div>
              </label>
            </div>
          );
        })}
      </div>
      {/* sizes */}
      <h3 className="font-bold text-s14 pt-3 pb-3">SIZES</h3>
      <div className="w-full flex items-center flex-wrap gap-2 border-b border-dashed pb-5">
        {data?.sizes?.map((size, indexS) => {
          return (
            <label
              key={indexS}
              className="relative  block cursor-pointer w-max"
            >
              <input
                checked={Ssize === size}
                onChange={(e) => {
                  setSsize(e.target.value === "on" ? size : "");
                }}
                type="checkbox"
                className="w-0 h-0 block opacity-0 peer"
              />
              <div className="min-w-[40px] h-10 border-4 rounded-sm text-color-grey-deep border-color-grey-light peer-checked:border-color-orange-deep peer-checked:text-color-orange-deep">
                <span className="block w-full h-full text-center  p-1 ">
                  {size}
                </span>
              </div>
            </label>
          );
        })}
      </div>
      {/* colors */}
      <h3 className="font-bold text-s14 pt-3 pb-3">COLORS</h3>
      <div className="w-full flex items-center flex-wrap gap-2">
        {data?.colors?.map((color, indexS) => {
          return (
            <label
              key={indexS}
              className="relative  block cursor-pointer w-max"
            >
              <input
                checked={Scolor === color.colorHex}
                onChange={(e) => {
                  setScolor(e.target.value === "on" ? color.colorHex : "");
                }}
                type="checkbox"
                className="w-0 h-0 block opacity-0 peer"
              />
              <div
                style={{ backgroundColor: color.colorHex }}
                className="w-8 h-8 rounded-full color-checked"
              ></div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarProductDetails;
