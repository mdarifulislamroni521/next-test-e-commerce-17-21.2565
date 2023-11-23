import React from "react";
import Image from "next/image";
import TopLayoutRow from "./topCollection/TopLayoutRow";
import TopLayoutGrid from "./topCollection/TopLayoutGrid";

const TopCollection = ({ collections = {} }) => {
  return (
    <div className="w-full  p-10 bg-color-pink-light pt-10 sm:pt-20 pb-10 sm:pb-20">
      {/* top collection header */}
      <div className="w-full flex flex-col items-center border-bottom-img">
        <span className="text-color-orange-deep text-sm font-bold">
          SPECIAL OFFER
        </span>
        <h1 className="text-5xl font-extrabold text-black pt-3 pb-3">
          TOP COLLECTION 2020
        </h1>
      </div>
      {/* top collection content */}
      <div className="w-full grid grid-cols-1 gap-2 lg:gap-3 md:grid-cols-2 lg:grid-cols-4 pt-16 pb-10">
        {/* grid 1 */}
        <div className="w-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            {collections.products.map((product, index) => {
              return <TopLayoutRow key={index} product={product} />;
            })}
          </div>
        </div>
        {/* grid 2 and 3 */}
        {collections.categorys.map((gridItem, index) => {
          return <TopLayoutGrid key={index} data={gridItem} />;
        })}
        {/* grid 4 */}
        <div className="w-full h-auto">
          <Image
            alt=""
            src={collections.banner}
            width={300}
            height={160}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
