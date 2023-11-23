import React from "react";

// temp data
const { products } = require("@/app/data");
import WishItem from "./sections/WishItem";
import Pagination from "../components/Pagination";

const page = () => {
  return (
    <div className="w-full bg-color-primary  ">
      <div className="container bg-color-primary rounded-t -translate-y-10 pb-32 border-b border-color-grey-deep-light">
        {/* super deals header */}
        <div className="w-full p-5 pt-10 pb-10 relative">
          <div className="flex-col sm:flex-row flex gap-1 p-2 pt-5 pb-5 items-center justify-center relative">
            <h3 className="text-black text-3xl font-bold">Wish List</h3>
          </div>
        </div>
        {/* products */}
        <div className="w-full">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((item, index) => {
              return <WishItem key={index} data={item} />;
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default page;
