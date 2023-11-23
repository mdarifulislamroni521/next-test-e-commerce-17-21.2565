"use client";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";

const ProductActions = ({ actionData = {} }) => {
  const [quantity, setQuantity] = useState("1");
  const [color, setColor] = useState(null);
  const [selsize, setSize] = useState(null);

  const updateQuantity = (type) => {
    const currentQn = Number(quantity);
    if (currentQn < 5 && type === "plus") {
      setQuantity(`${currentQn + 1}`);
    } else if (currentQn > 1 && type === "minus") {
      setQuantity(`${currentQn - 1}`);
    }
  };
  return (
    <div>
      <div className="flex items-center flex-wrap gap-2 pt-3 pb-4">
        {/* sizes */}
        {actionData.sizes.map((size, index) => {
          return (
            <span
              onClick={() => {
                setSize(size);
              }}
              key={index}
              className={`border border-color-grey-deep inline-block pl-3 pr-3 rounded hover:bg-color-orange-deep hover:border-color-orange-deep hover:text-white duration-300 cursor-pointer ${
                size === selsize
                  ? "bg-color-orange-deep border-color-orange-deep text-white"
                  : ""
              }`}
            >
              {size}
            </span>
          );
        })}
      </div>
      {/* add to cart and quantitys */}
      <div className="flex items-center gap-5 pt-5 pb-5">
        {/* quantitys */}
        <div className="flex items-center gap-5 border-2 p-2 pl-3 pr-3 border-color-grey-light select-none">
          <AiOutlineMinus
            onClick={() => updateQuantity("minus")}
            size={30}
            className="text-color-grey-deep rounded-full block p-1 hover:bg-color-grey-light cursor-pointer select-none"
          />
          <span className="block text-lg select-none">{quantity}</span>
          <AiOutlinePlus
            onClick={() => updateQuantity("plus")}
            size={30}
            className="text-color-grey-deep rounded-full block p-1 hover:bg-color-grey-light cursor-pointer select-none"
          />
        </div>
        <button className="p-3 pl-5 pr-5 sm:pl-16 sm:pr-16 w-max text-s14 duration-300 bg-color-orange-deep border-2 border-color-transparent text-center rounded-md text-white hover:bg-color-transparent hover:text-black hover:border-color-orange-deep">
          Add To Cart
        </button>
      </div>
      {/* wishlist add functions */}
      <div className="w-full pt-5 pb-3 border-b border-color-grey-light">
        <button className="flex items-center gap-3 text-color-grey-deep hover:text-color-orange-deep duration-300">
          <AiOutlineHeart size={20} />
          <h3 className="text-s15 font-bold">Add To Wishlist</h3>
        </button>
      </div>
      {/* tags */}
      <div className="w-full pt-3">
        <h3 className="text-s15 text-color-grey-deep">Tags:</h3>
        <div className="w-full pt-1 pb-5 flex flex-wrap gap-2">
          {actionData.tags.map((tag, index) => {
            return (
              <span key={index} className="border block p-1 pl-3 pr-3 text-sm">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
