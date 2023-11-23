import Shortslider from "@/app/components/Shortslider";
import React from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import newSliderItem from "./newProduct/NewSliderItem";

const NewProducts = ({ newProducts = [] }) => {
  return (
    <div className="w-full rounded-sm shadow-sm bg-color-primary p-3 pl-4 pr-4 pb-5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-s14">NEW PRODUCTS</h3>
        <div className="flex items-center">
          {/* arrow */}
          <MdKeyboardArrowLeft
            size={20}
            className=" newp-slide-left rounded-full hover:bg-color-grey-deep-light hover:text-color-orange-deep duration-300 cursor-pointer"
          />
          <MdKeyboardArrowRight
            size={20}
            className="newp-slide-right rounded-full hover:bg-color-grey-deep-light hover:text-color-orange-deep duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="cursor-grab pt-2">
        <Shortslider
          RenderItem={newSliderItem}
          backCls="newp-slide-left"
          rightCls="newp-slide-right"
          data={newProducts}
        />
      </div>
    </div>
  );
};

export default NewProducts;
