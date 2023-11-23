"use client";
import React from "react";
import AccSidebar from "../subComponents/AccSidebar";
import Image from "next/image";

import { BsCartPlus } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { LuPackageOpen } from "react-icons/lu";

import { cartData } from "@/app/data";

const page = () => {
  return (
    <div className="w-full min-h-[400px] bg-color-primary">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AccSidebar active="orders" />
          <div className="flex-1">
            {/* header */}
            <div className="w-full pt-2 pb-2">
              <div className="w-full flex items-center gap-2">
                <input
                  placeholder="Enter Order ID ..."
                  className={`flex-1 p-2 border border-color-grey-light
                focus:outline-none focus:border-color-grey-deep rounded
                text-sm uppercase`}
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
                      return (
                        <div
                          key={index}
                          className={`w-full bg-color-grey-deep-light 
                      p-2 rounded block`}
                        >
                          <div className={`w-full flex gap-2`}>
                            {/* image */}
                            <div
                              className={`w-20 h-24 xsm400:w-[100px] xsm400:h-[100px] overflow-hidden border
                         border-color-grey-light`}
                            >
                              <Image
                                src={order.picture}
                                objectFit="cover"
                                width={100}
                                height={100}
                              />
                            </div>
                            {/* right  */}
                            <div className="flex-1">
                              <a
                                href="/product/123"
                                className={`text-sm font-bold text-color-orange-deep`}
                              >
                                {order.title}
                              </a>
                              <div className="flex items-center flex-wrap gap-2">
                                <span className="text-s14 text-black">
                                  $69.00
                                </span>
                                <span className="bg-green-500 text-white text-s10 inline-block pl-1 pr-1 rounded">
                                  Paid
                                </span>

                                <span className="text-sm text-black">
                                  15 November 2023
                                </span>
                                <span className="text-sm text-color-grey-deep">
                                  No coupon applyed
                                </span>
                              </div>
                              {/* progress bar wraper */}
                              <div className="max-w-[450px]">
                                {/* progress bar */}
                                <div className="flex items-center gap-1 pt-3">
                                  {/* progress item */}
                                  <div className="flex gap-1 items-center w-max">
                                    <div
                                      className={`w-8 h-8 bg-color-grey-light rounded-full 
                              flex items-center justify-center relative color-checked
                              border-2 ${
                                order.progress > 0
                                  ? "border-green-500"
                                  : "border-transparent"
                              }`}
                                    >
                                      <BsCartPlus
                                        size={15}
                                        className={`${
                                          order.progress > 0
                                            ? "text-green-500"
                                            : "text-color-orange-deep"
                                        }`}
                                      />
                                    </div>
                                    {/* <div className="flex-1 h-[1px] border-t"></div> */}
                                  </div>
                                  {/* progress item 2 */}
                                  <div className="flex gap-1 items-center w-1/4">
                                    <div
                                      className={`flex-1 h-[1px] border-t ${
                                        order.progress > 1
                                          ? "border-green-500"
                                          : "border-color-grey-light"
                                      } `}
                                    ></div>
                                    <div
                                      className={`w-8 h-8 bg-color-grey-light rounded-full 
                              flex items-center justify-center border-2 border-transparent ${
                                order.progress > 1
                                  ? "border-green-500"
                                  : "border-transparent"
                              }`}
                                    >
                                      <TfiPackage
                                        size={15}
                                        className={`${
                                          order.progress > 1
                                            ? "text-green-500"
                                            : "text-color-orange-deep"
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  {/* progress item 3 */}
                                  <div className="flex gap-1 items-center w-1/4">
                                    <div
                                      className={`flex-1 h-[1px] border-t ${
                                        order.progress > 2
                                          ? "border-green-500"
                                          : "border-color-grey-light"
                                      } `}
                                    ></div>
                                    <div
                                      className={`w-8 h-8 bg-color-grey-light rounded-full 
                              flex items-center justify-center border-2 border-transparent ${
                                order.progress > 2
                                  ? "border-green-500"
                                  : "border-transparent"
                              }`}
                                    >
                                      <LiaTruckPickupSolid
                                        size={15}
                                        className={`${
                                          order.progress > 2
                                            ? "text-green-500"
                                            : "text-color-orange-deep"
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  {/* progress item 4 */}
                                  <div className="flex gap-1 items-center w-1/4">
                                    <div
                                      className={`flex-1 h-[1px] border-t ${
                                        order.progress > 3
                                          ? "border-green-500"
                                          : "border-color-grey-light"
                                      }`}
                                    ></div>
                                    <div
                                      className={`w-8 h-8 bg-color-grey-light rounded-full 
                              flex items-center justify-center border-2 border-transparent ${
                                order.progress > 3
                                  ? "border-green-500"
                                  : "border-transparent"
                              }`}
                                    >
                                      <LuPackageOpen
                                        size={15}
                                        className={`${
                                          order.progress > 3
                                            ? "text-green-500"
                                            : "text-color-orange-deep"
                                        }`}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* progress title */}
                                <div className="flex items-center gap-2">
                                  {/* progress title 1 */}
                                  <div className="w-1/4">
                                    <span
                                      className={`text-s8 xsm400:text-10 inline-block pl-2 
                                ${
                                  order.progress > 0
                                    ? "text-green-500"
                                    : "text-color-grey-deep"
                                }`}
                                    >
                                      Start
                                    </span>{" "}
                                  </div>
                                  {/* progress title 1 */}
                                  <div className="w-1/4">
                                    <span
                                      className={`text-s8 xsm400:text-10 inline-block -ml-[2px] 
                                ${
                                  order.progress > 1
                                    ? "text-green-500"
                                    : "text-color-grey-deep"
                                }`}
                                    >
                                      Packaged
                                    </span>{" "}
                                  </div>
                                  {/* progress title 1 */}
                                  <div className="w-1/4">
                                    <span
                                      className={`text-s8 xsm400:text-10 inline-block pl-1 
                                ${
                                  order.progress > 2
                                    ? "text-green-500"
                                    : "text-color-grey-deep"
                                }`}
                                    >
                                      Shipted
                                    </span>{" "}
                                  </div>
                                  {/* progress title 1 */}
                                  <div className="w-1/4">
                                    <span
                                      className={`text-s8 xsm400:text-10 inline-block pl-1 
                                ${
                                  order.progress > 3
                                    ? "text-green-500"
                                    : "text-color-grey-deep"
                                }`}
                                    >
                                      Delivered
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
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
                    href="/shop"
                  >
                    Continue Shopping
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

export default page;
