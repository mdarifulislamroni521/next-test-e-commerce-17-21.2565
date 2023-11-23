import React from "react";
import Image from "next/image";
import Rating from "@/app/components/Rating";
const NewSliderItem = ({ data = [] }) => {
  return (
    <div className="w-full h-full">
      {data?.map((item, index) => {
        return (
          <a
            href="/product/123"
            className="w-full flex gap-2 mt-3 overflow-hidden"
            key={index}
          >
            <Image
              src={item.url}
              width={100}
              height={100}
              style={{ width: 70, height: 65 }}
            />
            <div className="flex-1 flex flex-col gap-1">
              <Rating size={10} avg={item.rating} />
              <h5 className="text-s14">{item.title}</h5>
              <span className="text-sm font-bold text-color-orange-deep">
                $ {Number(item.price).toFixed(2)}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default NewSliderItem;
