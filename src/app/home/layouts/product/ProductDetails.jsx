"use client";
import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import AskQuestions from "./AskQuestions";

const ProductDetails = ({ htmlDescriptiopn }) => {
  const [selected, setSelected] = useState("description");
  return (
    <div className="container">
      {/* selector */}
      <ul className="flex items-center m-auto gap-4 border-b border-[#ebebeb] pl-10 pr-10">
        <li
          onClick={() => setSelected("description")}
          className={`product-slide-btn  ${
            selected === "description"
              ? "after:border-color-orange-deep text-color-orange-deep"
              : "text-black"
          }  cursor-pointer`}
        >
          <a>Product Details</a>
        </li>

        <li
          onClick={() => setSelected("askQuestion")}
          className={`product-slide-btn ${
            selected === "askQuestion"
              ? "after:border-color-orange-deep text-color-orange-deep"
              : "text-black"
          } cursor-pointer`}
        >
          <a>Ask Questions</a>
        </li>
      </ul>
      {/* product description in html */}
      <div className="pt-10 pb-10">
        {selected === "description" ? (
          <ProductDescription htmlDescriptiopn={htmlDescriptiopn} />
        ) : selected === "askQuestion" ? (
          <AskQuestions />
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetails;
