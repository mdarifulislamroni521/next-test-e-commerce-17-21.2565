"use client";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ProductCreateEdit from "./ProductCreateEdit";

const ProductEdit = ({ id = null, close = () => {} }) => {
  return (
    <div className="w-11/12 md:w-4/5 bg-white m-auto mt-10 mb-10 animate-popup-400 rounded relative">
      <div className="w-full p-5">
        <ProductCreateEdit type="edit" />
      </div>
      <button
        onClick={close}
        className="absolute top-1 right-1 text-black p-2 hover:text-color-orange-deep duration-300"
      >
        <IoIosCloseCircleOutline size={25} />
      </button>
    </div>
  );
};

export default ProductEdit;
