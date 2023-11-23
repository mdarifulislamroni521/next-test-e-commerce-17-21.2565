"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { cartData } from "@/app/data";

const HeaderCart = () => {
  const [cart, setCart] = useState(cartData);

  return (
    <div className="hidden group-hover/cart:block absolute top-10 pt-2 -right-16 w-max z-10 animate-fadeup-20">
      <div className="bg-white p-3 shadow border border-color-grey-light">
        <div className="w-max max-w-[300px]">
          <div className="flex flex-col gap-3 border-b border-color-grey-deep pb-5">
            {cart.productItems?.map((cartItem, index) => {
              return (
                <div key={index} className="w-full">
                  <div className="flex gap-2">
                    <Image
                      src={cartItem.picture}
                      width={100}
                      height={100}
                      style={{ width: 80, height: 80 }}
                      alt=""
                    />
                    <div className="pr-1">
                      <h5 className="text-sm font-extrabold text-black">
                        {cartItem.title}
                      </h5>
                      <div className="flex gap-2 items-center pt-1">
                        <span className="text-s14 text-black">
                          ${Number(cartItem.price).toFixed(2)}
                        </span>
                        <del className="text-s14 text-color-grey-deep">
                          ${Number(cartItem.regularPrice).toFixed(2)}
                        </del>
                      </div>
                    </div>
                    <button className="text-black hover:text-red-500 duration-300 mr-1 p-1">
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* total */}
          <div className="flex items-center justify-between pt-2">
            <h5 className="text-black text-s14">Total</h5>
            <span className="text-s14 text-black">
              ${Number(cart.total).toFixed(2)}
            </span>
          </div>
          {/* checkout */}
          <div className="pt-5 pb-5 w-44 m-auto">
            <a
              className="w-full inline-block p-2 rounded-full bg-color-orange-deep text-white text-s14 text-center border-2 border-transparent hover:border-color-orange-deep hover:bg-transparent hover:text-color-orange-deep duration-300"
              href="/cart/checkout/"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
