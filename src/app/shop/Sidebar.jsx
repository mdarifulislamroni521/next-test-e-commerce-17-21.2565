"use client";
import React from "react";

import SidebarCategorys from "./subComponents/SidebarCategorys";
import SidebarPriceFilter from "./subComponents/SidebarPriceFilter";
import NewProducts from "./subComponents/NewProducts";
import SidebarProductDetails from "./subComponents/SidebarProductDetails";

import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({
  data = {},
  isopenFilter = false,
  updateFilter = () => {},
}) => {
  return (
    <div
      className={`absolute w-full md:w-56 bg-black bg-opacity-0 top-0 left-0 md:top-auto md:left-auto md:static ${
        !isopenFilter ? "-ml-72" : ""
      } md:ml-0 transition-all duration-300 z-0`}
    >
      <div id="shop-sidebar" className={`w-full`}>
        <div
          id="shop-sidebar-content"
          className="pl-5 pr-5 bg-color-grey-deep-light md:bg-none md:pl-0 md:pr-0 w-fit z-10 relative"
        >
          <div className={`w-56 pt-10 md:pt-0 md:top-auto md:left-auto `}>
            <div className="flex flex-col gap-3">
              {/* product categorys */}
              <SidebarCategorys categorys={data.categorys} />
              <SidebarPriceFilter />
              <NewProducts newProducts={data.newProducts} />
              <SidebarProductDetails data={data} />
              <div className="w-full rounded-sm shadow-sm bg-color-primary p-3 pl-4 pr-4 pb-5">
                <div className="w-full relative  block">
                  <button className="bg-color-orange-deep p-2 w-full text-sm block text-color-primary font-bold rounded">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* close */}
          <button
            className="absolute top-3 right-5 p-1 bg-color-primary md:hidden"
            onClick={updateFilter}
          >
            <AiOutlineClose size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
