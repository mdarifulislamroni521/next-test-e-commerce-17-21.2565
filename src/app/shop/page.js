"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Products from "./Products";

// temp data
import { shop } from "@/app/data";

const Page = ({}) => {
  const [openFilter, setOpenFilter] = useState(false);

  const updateFilter = () => {
    setOpenFilter(!openFilter);
  };
  return (
    <div className="w-full bg-color-grey-light">
      <div className="container pt-5 pb-5">
        <div className="w-full flex gap-5">
          {/* side bar */}
          <Sidebar
            data={shop.sidebar}
            isopenFilter={openFilter}
            updateFilter={updateFilter}
          />

          {/* products */}
          <Products filterCallback={updateFilter} data={shop.result} />
        </div>
      </div>
    </div>
  );
};

export default Page;
