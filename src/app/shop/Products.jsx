import Image from "next/image";
import React from "react";

import { BiFilterAlt } from "react-icons/bi";
import Rating from "../components/Rating";
import Pagination from "../components/Pagination";

const Products = ({ filterCallback = () => {}, data = {} }) => {
  return (
    <div className="flex-1">
      {/* shop-header */}
      <div className="flex gap-2 items-center justify-between bg-color-grey-deep-light shadow-sm p-3 pb-3 mb-3">
        <p className="text-sm text-color-grey-deep italic">
          Search Result: <span className="text-color-orange-deep">2,2296</span>{" "}
          items
        </p>
        <div className="flex items-center gap-2">
          <button onClick={filterCallback} className="border p-1 md:hidden">
            <BiFilterAlt size={20} className="text-color-grey-deep" />
          </button>
          <select className="bg-transparent p-1 outline-none border  text-sm focus:outline focus:border pr-1">
            <option value="Default Sorting">Default Sorting</option>
            <option value="Default Sorting">Short by Price</option>
            <option value="Default Sorting">Short py Rating</option>
            <option value="Default Sorting">Short By Best Sell</option>
          </select>
        </div>
      </div>
      {/* shop-products */}
      <div className="w-full">
        <div className="grid grid-cols-1 gap-1 sm:gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 md1k:grid-cols-4">
          {data?.products?.map((product, index) => {
            return (
              <a
                key={index}
                href={`product/123`}
                className="w-full h-auto bg-white shadow rounded-sm mt-1"
              >
                <Image
                  src={product.urls[0]}
                  width={290}
                  height={320}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="p-2 pb-4 flex flex-col justify-center bg-color-grey-deep-light">
                  <h5 className="text-black pb-1 text-center text-s13">
                    {product.title}
                  </h5>
                  <div className="flex items-center justify-center gap-2">
                    <del className="text-color-grey-deep text-s14">
                      ${Number(product.regular).toFixed(2)}
                    </del>
                    <span className="text-color-orange-deep text-s14">
                      ${Number(product.price).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center justify-center">
                    <Rating size={13} avg={product.rating} />{" "}
                    <span className="text-sm text-color-grey-deep">{`(${product.ratingTotal})`}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* pagination */}
      <Pagination data={data} />
    </div>
  );
};

export default Products;
