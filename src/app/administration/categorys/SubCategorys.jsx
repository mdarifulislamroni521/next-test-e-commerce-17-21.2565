"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

// temp data
import { mainCategorys } from "@/app/data";
import SubCategoryItem from "./SubCategoryItem";

const SubCategorys = () => {
  const [createIcon, setCreateIcon] = useState(null);

  return (
    <div className="w-full bg-white p-2 pt-0 mb-5 shadow-sm shadow-border rounded">
      <h3 className="text-lg pt-3 pb-2 text-center border-b border-color-grey-light">
        Sub Categorys
      </h3>
      {/* create categorys */}
      <div className="w-full  pt-2 pb-2 border-b border-dashed">
        <div className="w-full flex items-center gap-2 p-2 rounded">
          <div className="w-9 h-9 border overflow-hidden">
            <label className="block w-full h-full cursor-pointer relative">
              <input
                onChange={(e) => setCreateIcon(e.target.files[0])}
                className="hidden"
                accept=".png"
                type="file"
              />
              <div className="w-full h-full flex flex-col justify-center items-center">
                <AiOutlineCloudUpload
                  className="text-color-grey-deep"
                  size={20}
                />
              </div>
              {createIcon && (
                <Image
                  src={window.URL.createObjectURL(createIcon)}
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="absolute w-full h-full top-0 left-0"
                />
              )}
            </label>
          </div>
          <input
            placeholder="Sub Categorys Name"
            className={`flex-1 p-2 border border-color-grey-light
              focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />
          <input
            placeholder="Unique slug"
            className={`flex-1 p-2 border border-color-grey-light lowercase
              focus:outline-none focus:border-color-grey-deep rounded text-sm`}
            type="text"
          />

          <select
            className={`max-w-[400px] flex gap-1 items-center p-2 border border-color-grey-light
                   rounded text-sm focus:outline-none`}
          >
            <option disabled>Select main Category</option>
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
          return <SubCategoryItem category={category} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SubCategorys;
