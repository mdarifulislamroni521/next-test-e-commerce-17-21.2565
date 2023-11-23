"use client";
import React, { Fragment } from "react";
import { BiCertification } from "react-icons/bi";

const SidebarCategorys = ({ categorys = [], chnageCategory = () => {} }) => {
  return (
    <div className="w-full rounded-sm shadow-sm bg-color-primary p-3 pl-4 pr-4 pb-5">
      <h3 className="font-bold text-s14 pb-5">PRODUCT CATEGORIES</h3>
      <div className="flex flex-col gap-3">
        {categorys?.map((category, index) => {
          return (
            <div
              key={index}
              onClick={() => chnageCategory("accessories")}
              className="flex items-center justify-between cursor-pointer group "
            >
              <div className="flex items-center gap-2">
                <BiCertification
                  size={12}
                  className="text-black group-hover:text-color-orange-deep duration-300"
                />
                <span className="text-color-grey-deep text-sm group-hover:text-color-orange-deep duration-300">
                  {category.name}
                </span>
              </div>
              <div className="min-w-[30px] p-1 pl-2 pr-2 rounded text-sm bg-[#f2f1ef] text-color-grey-deep group-hover:text-color-orange-deep duration-300 text-center">
                {category.total}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarCategorys;
