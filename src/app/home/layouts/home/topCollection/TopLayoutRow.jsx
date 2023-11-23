import React from "react";
import Image from "next/image";

const topLayoutRow = ({ product = {} }) => {
  return (
    <a
      href="/product/123"
      className="p-1 lg:p-4 bg-white h-[48%] shadow flex items-center gap-3"
    >
      <Image
        alt=""
        width={300}
        height={300}
        style={{ width: "40%", height: "auto", maxWidth: 120 }}
        src={product.urls[0]}
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-black text-bold text-base xl:text-lg">
          {product.title}
        </h4>
        <div className="flex items-center flex-wrap gap-3">
          <span className="text-s14 text-color-orange-deep font-extrabold">
            US $ {product.price}
          </span>{" "}
          {product?.discount ? (
            <>
              <span className="text-color-grey-light">
                {" | "}{" "}
                <span className="bg-color-orange-deep text-white rounded text-s14 pl-1 pr-1">
                  {product.discount}% off
                </span>{" "}
              </span>
            </>
          ) : null}
        </div>
        {/* colors */}
        <div className="flex items-center gap-2 pt-2">
          {product?.colors.map((color, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: color.colorHex }}
                className={`w-5 h-5 rounded-full`}
              ></div>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default topLayoutRow;
