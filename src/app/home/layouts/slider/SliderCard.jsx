import Link from "next/link";
import React from "react";

const SliderCard = ({ data }) => {
  return (
    <div className="container overflow-hidden min-h-[300px] lg:min-h-[500px]">
      <div className="grid md:grid-cols-2 h-full justify-center">
        {/* grid element 1 */}
        <div className="w-full order-2 md:order-1 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-2xl lg:text-3xl font-extrabold ">
            {data.title}
          </h1>
          <h1 className="text-5xl md:text-4xl lg:text-6xl pt-3 font-[1000] ">
            {data.boldTitle}
          </h1>
          <p className="pt-7 pb-7 text-base">{data.description}</p>
          <Link
            className="w-fit m-auto md:m-0 select-none mb-20 md:mb-5 p-3 md:pl-5 pl-10 md:pr-5 pr-10 font-extrabold shadow bg-color-grey-deep-light rounded hover:bg-color-blue duration-300 hover:text-color-primary"
            href={data.button.url}
          >
            {data.button.label}
          </Link>
        </div>
        {/* grid element 2 */}
        <div className="w-full order-1 md:order-2 p-14">
          <img className="w-full h-full" src={data.imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
