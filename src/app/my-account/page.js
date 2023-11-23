import React from "react";
import AccSidebar from "./subComponents/AccSidebar";
import { AiOutlineWarning } from "react-icons/ai";

const page = () => {
  return (
    <div className="w-full min-h-[450px] bg-color-primary">
      <div className="container">
        <div className="pt-5 pb-16 flex gap-5">
          <AccSidebar />
          <div className="flex-1">
            <div className="w-full gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md1k:grid-cols-4">
              {/* frist grid */}
              <div
                className={`w-full min-h-[100px] bg-color-grey-light
                flex flex-col items-center justify-center rounded`}
              >
                <h3 className="text-2xl font-extrabold text-color-orange-deep">
                  Order Total
                </h3>
                <h5
                  className={`text-white bg-color-orange-deep pl-2 pr-2
                rounded-tr-xl rounded-bl-xl font-bold mt-2`}
                >
                  33
                </h5>
              </div>
              {/* 2nd grid */}
              <div
                className={`w-full min-h-[100px] bg-color-grey-light
                flex flex-col items-center justify-center rounded`}
              >
                <h3 className="text-2xl font-extrabold text-color-secondary">
                  Processing
                </h3>
                <h5
                  className={`text-white bg-color-secondary pl-2 pr-2
                rounded-tr-xl rounded-bl-xl font-bold mt-2`}
                >
                  22
                </h5>
              </div>
              {/* 3rd grid */}
              <div
                className={`w-full min-h-[100px] bg-color-grey-light
                flex flex-col items-center justify-center rounded`}
              >
                <h3 className="text-2xl font-extrabold text-green-500">
                  Delivered
                </h3>
                <h5
                  className={`text-white bg-green-500 pl-2 pr-2
                rounded-tr-xl rounded-bl-xl font-bold mt-2`}
                >
                  5
                </h5>
              </div>
              {/* 4th grid */}
              <div
                className={`w-full min-h-[100px] bg-color-grey-light
                flex flex-col items-center justify-center rounded`}
              >
                <h3 className="text-2xl font-extrabold text-color-yellow-deep">
                  Shifted
                </h3>
                <h5
                  className={`text-white bg-color-yellow-deep pl-2 pr-2
                rounded-tr-xl rounded-bl-xl font-bold mt-2`}
                >
                  3
                </h5>
              </div>
              {/* 5th grid */}
              <div
                className={`w-full min-h-[100px] bg-color-grey-light
                flex flex-col items-center justify-center rounded`}
              >
                <h3 className="text-2xl font-extrabold text-red-500">
                  Canceled
                </h3>
                <h5
                  className={`text-white bg-red-500 pl-2 pr-2
                rounded-tr-xl rounded-bl-xl font-bold mt-2`}
                >
                  2
                </h5>
              </div>
            </div>
            {/* notice */}
            <div className="w-full pt-5 pb-10">
              <div className="flex items-center gap-2 bg-yellow-100 rounded-xl p-2">
                <AiOutlineWarning
                  className="text-color-yellow-deep"
                  size={20}
                />
                <p className="text-sm text-yellow-600">
                  We{"'"}re committed to delivering your products as swiftly as
                  possible. In the event of any delays, kindly check your order
                  status on our Order Tracking page. Thank you for choosing us,
                  and happy shopping!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
