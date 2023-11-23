"use client";
import React from "react";
import AdminSidebar from "../subComponents/AdminSidebar";

import { cartData } from "@/app/data";
import OrderItem from "./OrderItem";
const Page = () => {
  return (
    <div className="w-full min-h-[400px] bg-color-primary">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="orders" />
          <div className="flex-1">
            {/* header */}
            <div className="w-full pt-2 pb-2">
              <div className="w-full flex items-center gap-2">
                <input
                  placeholder="Enter Order ID / username / email "
                  className={`flex-1 p-2 border border-color-grey-light
            focus:outline-none focus:border-color-grey-deep rounded
            text-sm lower`}
                  type="text"
                />
                <button
                  className={`bg-color-orange-deep rounded text-sm 
            block p-2 pl-3 pr-3 text-white hover:bg-opacity-80`}
                >
                  Track Order
                </button>
              </div>
            </div>
            {cartData.productItems.length > 0 ? (
              <>
                {/* orders tracks */}
                <div className="w-full pt-5 pb-10">
                  <div
                    className={`w-full grid grid-cols-1 gap-2 md1k:grid-cols-2 `}
                  >
                    {/* grid item 1 */}
                    {cartData.productItems.map((order, index) => {
                      return <OrderItem order={order} key={index} />;
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center pt-10">
                <div>
                  <h3 className="text-color-grey-deep">Nothing Orders found</h3>
                  <a
                    className={`mt-2 bg-color-orange-deep p-1 pl-3 pr-3 
                rounded text-sm text-white block text-center w-max`}
                    href="/my-account/vendor-orders/"
                  >
                    Continue Searching
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
