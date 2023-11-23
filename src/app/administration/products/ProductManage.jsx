"use client";
import React, { useState } from "react";

import { products } from "@/app/data";
import Rating from "@/app/components/Rating";
import Image from "next/image";

import { FaRegEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import Overlay from "@/app/components/Overlay";
import ProductEdit from "./ProductEdit";

const ProductManage = () => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="w-full pt-3 pb-10 relative">
      <div
        className={`grid grid-cols-1 gap-1 sm:gap-2 sm:grid-cols-2 
     md:gap-4 lg:grid-cols-3 md1k:grid-cols-4`}
      >
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="w-full h-auto bg-white shadow rounded-sm mt-1 relative group overflow-hidden"
            >
              <div className="w-full h-52">
                <Image
                  src={product.urls[0]}
                  width={290}
                  height={320}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt=""
                />
              </div>
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

              {/* absolute screen */}
              <div
                className={`hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded
                 justify-center items-center transition-all animate-fadeup-20
              `}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setEditProduct(product)}
                    className={`bg-color-orange-deep text-white block p-1
                  hover:bg-opacity-80 rounded`}
                  >
                    <MdEdit size={25} />
                  </button>
                  <a
                    className={`bg-color-orange-deep text-white block p-1
                  hover:bg-opacity-80 rounded`}
                    href="/product/123"
                  >
                    <FaRegEye size={25} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {editProduct?.id ? (
        <Overlay>
          <ProductEdit
            close={() => setEditProduct(false)}
            id={editProduct.id}
          />
        </Overlay>
      ) : null}
    </div>
  );
};

export default ProductManage;
