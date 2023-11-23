import React from "react";
import { AiFillCar } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { GiSwapBag } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const Terms = () => {
  return (
    <div className="container grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 pb-20">
      {/* card 1 */}
      <div className="group/term w-full flex flex-col items-center p-3 border-r-0 sm:border-r border-[#f2f2f2]">
        <AiFillCar
          className="text-color-grey-deep group-hover/term:-rotate-[360deg] duration-500"
          size={50}
        />
        <h2 className="text-black font-bold group-hover/term:text-color-secondary duration-300 pt-2 pb-1 text-center">
          Free Shipping On Over $ 50
        </h2>
        <p className="text-color-grey-deep text-center">
          Agricultural mean crops livestock
        </p>
      </div>
      {/* card 2 */}
      <div className="group/term w-full flex flex-col items-center border-r-0 md:border-r  p-3 border-[#f2f2f2]">
        <CiDiscount1
          className="text-color-grey-deep group-hover/term:-rotate-[360deg] duration-500"
          size={50}
        />
        <h2 className="text-black font-bold group-hover/term:text-color-secondary duration-300 pt-2 pb-1 text-center">
          Free Shipping On Over $ 50
        </h2>
        <p className="text-color-grey-deep text-center">
          Agricultural mean crops livestock
        </p>
      </div>
      {/* card 3 */}
      <div className="group/term w-full flex flex-col items-center p-3 border-r-0 sm:border-r md:border-r-0 lg:border-r border-[#f2f2f2]">
        <GiSwapBag
          className="text-color-grey-deep group-hover/term:-rotate-[360deg] duration-500"
          size={50}
        />
        <h2 className="text-black font-bold group-hover/term:text-color-secondary duration-300 pt-2 pb-1 text-center">
          Free Shipping On Over $ 50
        </h2>
        <p className="text-color-grey-deep text-center">
          Agricultural mean crops livestock
        </p>
      </div>
      {/* card 4 */}
      <div className="group/term w-full flex flex-col items-center p-3">
        <RiCustomerService2Fill
          className="text-color-grey-deep group-hover/term:-rotate-[360deg] duration-500"
          size={50}
        />
        <h2 className="text-black font-bold group-hover/term:text-color-secondary duration-300 pt-2 pb-1 text-center">
          Free Shipping On Over $ 50
        </h2>
        <p className="text-color-grey-deep text-center">
          Agricultural mean crops livestock
        </p>
      </div>
    </div>
  );
};

export default Terms;
