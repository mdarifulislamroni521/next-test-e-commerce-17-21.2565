"use client";
import React, { useState } from "react";
import Slider from "react-slider";

const SidebarPriceFilter = () => {
  const [values, setValues] = useState([120, 600]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <div className="w-full rounded-sm shadow-sm bg-color-primary p-3 pl-4 pr-4 pb-5">
      <h3 className="font-bold text-s14 pb-5">FILTER BY PRICE</h3>
      <div className="w-full relative pb-5 block">
        <Slider
          className="shop-range-slider"
          value={values}
          onChange={handleChange}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          min={40}
          max={600}
        />
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-color-grey-deep text-sm">PRICE : </span>
        <span className="text-color-grey-deep text-sm">
          {" "}
          ${values[0]} - ${values[1]}
        </span>
      </div>
    </div>
  );
};

export default SidebarPriceFilter;
