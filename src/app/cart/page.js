"use client";
import React, { useState } from "react";
import Terms from "../components/Terms";
import { cartData } from "@/app/data";
import CartProductItem from "./layouts/CartProductItem";

const Page = () => {
  const [cart, setCart] = useState({
    ...cartData,
  });
  const [delivery, setDelivery] = useState("shipping");
  return (
    <div className="w-full bg-color-primary pt-16 pb-32">
      <div className="container">
        <div className="w-full flex flex-col md800:flex-row gap-3">
          <div className="w-full  md800:max-w-[calc(100%-320px)]  block">
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse cart-table">
                <thead>
                  <tr key="head">
                    <th className="text-s14 font-extrabold p-3">PRODUCT</th>
                    <th className="text-s14 font-extrabold p-3">PRICE</th>
                    <th className="text-s14 font-extrabold p-3">QUANTITY</th>
                    <th className="text-s14 font-extrabold p-3">SUBTOTAL</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cart?.productItems?.map((product, index) => {
                    return (
                      <CartProductItem
                        product={product}
                        cart={cart}
                        setCart={setCart}
                        key={index}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* apply coupon */}
            <div className="flex items-center gap-2 justify-between pt-5 pb-10">
              <div className="flex items-center">
                <input
                  className="uppercase p-3 pr-0 text-sm outline-none border border-color-grey-light rounded-l w-40"
                  placeholder="Enter Coupon Code..."
                  type="text"
                />
                <button className="p-3 text-sm uppercase bg-color-orange-deep text-white rounded-r">
                  Apply Coupon
                </button>
              </div>
              <a
                className="p-3 pl-4 pr-4 bg-color-orange-deep rounded text-s14 text-white"
                href="/"
              >
                Continue Shopping
              </a>
            </div>
          </div>

          {/* action section */}
          <div className="w-full h-max min-h-[200px] md800:min-w-[320px] md800:w-80 bg-color-grey-deep-light p-2 pt-5 pb-5">
            <div className="w-full pl-4 pr-4 max-w-[320px] m-auto">
              {/* pricing */}
              <div className="w-full pb-5 border-b border-dotted">
                <div className="pb-2">
                  {/* total price */}
                  <div className="flex items-center gap-10 ">
                    <h3 className="text-s14 text-black w-20">SUB TOTAL:</h3>
                    <span className="text-s14 text-black">
                      ${Number(cart.total).toFixed(2)}
                    </span>
                  </div>
                  {/* shipping */}
                  {delivery === "shipping" ? (
                    <div className="flex items-center gap-10 pt-2">
                      <h3 className="text-s14 text-black w-20">SHIPPING:</h3>
                      <span className="text-s14 text-black">
                        ${Number(cart.shipping).toFixed(2)}
                      </span>
                    </div>
                  ) : null}

                  {/* shipping */}
                  <div className="flex items-center gap-10 pt-2">
                    <h3 className="text-s14 text-black w-20">DISCOUNT20:</h3>
                    <span className="text-s14 text-black">
                      -${Number(20).toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* delivery */}
                <div className="flex items-center gap-10 pt-2 pb-2 border-t">
                  <h3 className="text-s14 text-black w-20">Delivery: </h3>
                  <div className="flex flex-col gap-2">
                    <label className="block relative">
                      <div className="flex items-center gap-2">
                        <input
                          checked={delivery === "shipping"}
                          onChange={(e) =>
                            setDelivery(
                              e.target.value === "on" ? "shipping" : ""
                            )
                          }
                          className="p-1 border-color-grey-deep checked:border-color-orange-deep peer"
                          type="checkbox"
                        />
                        <span className="text-sm">
                          Shipping {`$(${Number(8.7).toFixed(2)})`}
                        </span>
                      </div>
                    </label>
                    <label className="block relative">
                      <div className="flex items-center gap-2">
                        <input
                          checked={delivery === "pickup"}
                          onChange={(e) =>
                            setDelivery(e.target.value === "on" ? "pickup" : "")
                          }
                          className="p-1 border-color-grey-deep checked:border-color-orange-deep peer"
                          type="checkbox"
                        />
                        <span className="text-sm">Pickup {`$(free)`}</span>
                      </div>
                    </label>
                  </div>
                </div>
                {/* total */}
                <div className="flex items-center gap-10 pt-2 border-t">
                  <h3 className="text-s14 text-black w-20 font-bold">Total </h3>
                  <span className="text-s14 text-black font-bold">
                    $
                    {Number(
                      delivery === "shipping"
                        ? cart.total + cart.shipping - 20
                        : cart.total - 20
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* payment method */}
              {/* <div className="w-full">
                <h3 className="text-s14 font-extrabold pt-3 pb-3">
                  Select Payment Method
                </h3>
                <div className="flex items-center flex-wrap gap-2">
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`w-20 h-auto p-2 inline-block rounded border ${
                      paymentMethod === "paypal"
                        ? "border-color-orange-deep"
                        : "border-transparent"
                    } overflow-hidden bg-color-grey-light`}
                  >
                    <Image
                      src={"/assets/images/paypal.png"}
                      width={100}
                      height={100}
                      style={{ width: "100%" }}
                    />
                  </button>
                  <button
                    onClick={() => setPaymentMethod("stripe")}
                    className={` w-20 h-auto p-2 inline-block rounded border ${
                      paymentMethod === "stripe"
                        ? "border-color-orange-deep"
                        : "border-transparent"
                    } overflow-hidden bg-color-grey-light`}
                  >
                    <Image
                      src={"/assets/images/stripe.png"}
                      width={100}
                      height={100}
                      style={{ width: "100%" }}
                    />
                  </button>
                </div>
              </div> */}
              {/* process */}
              <div className="w-full pt-5 pb-7">
                <a
                  className="p-2 pl-2 pr-2 block text-center m-auto bg-color-orange-deep text-white rounded-full border-2 border-transparent hover:bg-transparent hover:text-color-orange-deep hover:border-color-orange-deep duration-300"
                  href="/cart/checkout"
                >
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Terms */}
        <Terms />
      </div>
    </div>
  );
};

export default Page;
