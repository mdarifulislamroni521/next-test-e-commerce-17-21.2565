"use client";
import React from "react";
import Image from "next/image";
import Rating from "@/app/components/Rating";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishItem = ({ data = {} }) => {
  return (
    <a
      href={`/product/${data.id}`}
      className="relative w-full h-full bg-color-grey-deep-light shadow hover:shadow-lg duration-300 rounded-sm border border-color-grey-deep-light mt-4 block"
    >
      <div className="relative flex flex-col items-center overflow-hidden">
        {/* image */}
        <div className="w-full p-3 bg-color-primary overflow-hidden">
          <Image
            alt=""
            width={300}
            height={300}
            src={data?.urls[0]}
            layout="responsive"
            objectFit="contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* info */}
        <div className="w-full flex flex-col items-center p-1 pt-2 pb-2">
          <h4>{data.title}</h4>
          <div className="flex gap-2 items-center text-color-grey-deep">
            <span className="text-color-orange-deep text-s14">
              US $ {data.price}
            </span>
            <Rating size={13} avg={3.9} />
          </div>
          <div className="grid grid-cols-2 gap-2  pt-2 pb-2">
            <button className="p-2 pl-4 pr-4 bg-color-secondary text-white block rounded text-center text-s14 w-full">
              Add To Cart
            </button>
            <button className="p-2 pl-4 pr-4 bg-color-orange-deep text-white block rounded text-center text-s14 w-full">
              Buy Now
            </button>
          </div>
        </div>
        {data?.discount ? (
          <div className="absolute pl-2 pr-2 rounded text-center text-sm top-2 left-2 bg-color-orange-deep text-white">
            <span>{data.discount}% off</span>
          </div>
        ) : null}
        <button onClick={() => {}} className="absolute top-1 right-1 p-1">
          <RiDeleteBin6Line size={20} className="text-red-500" />
        </button>
      </div>
    </a>
  );
};

export default WishItem;
