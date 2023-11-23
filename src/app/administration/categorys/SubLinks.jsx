"use client";
import React, { useState } from "react";
// temp data
import { mainCategorys } from "@/app/data";
import SublinkItem from "./SublinkItem";

const SubLinks = () => {
  const [createIcon, setCreateIcon] = useState(null);

  return (
    <div className="w-full bg-white p-2 pt-0 mb-5 shadow-sm shadow-border rounded">
      <h3 className="text-lg pt-3 pb-2 text-center border-b border-color-grey-light">
        Sub Links
      </h3>
      {/* create categorys */}
      <div className="w-full  pt-2 pb-2 border-b border-dashed">
        <div className="w-full flex items-center gap-2 p-2 rounded">
          <input
            placeholder="Sub Link Name"
            className={`flex-1 p-2 border border-color-grey-light
          focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />
          <input
            placeholder="Link Slug"
            className={`flex-1 p-2 border border-color-grey-light lowercase
          focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />

          <select
            multiple
            className={`max-w-[400px] flex gap-1 items-center p-2 border border-color-grey-light
                   rounded text-s9 focus:outline-none max-h-[37px]`}
          >
            <option disabled>Select sub Categorys</option>
            <option value="firstime" key="first">
              Sub category 1
            </option>
            <option value="always" key="always">
              Sub Category 2
            </option>
          </select>

          <button
            className={`bg-color-orange-deep rounded text-sm 
block p-2 pl-3 pr-3 text-white hover:bg-opacity-80`}
          >
            Create
          </button>
        </div>
      </div>
      {/* list categorys */}
      <div className="w-full pt-2 pb-3 overflow-x-scroll xsm500:overflow-x-hidden">
        {mainCategorys.map((category, index) => {
          return <SublinkItem category={category} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SubLinks;
