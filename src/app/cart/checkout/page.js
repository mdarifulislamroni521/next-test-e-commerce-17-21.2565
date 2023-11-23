"use client";
import React, { useState } from "react";
import { cartData } from "@/app/data";
import Image from "next/image";
import Overlay from "@/app/components/Overlay";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbDiscountCheck } from "react-icons/tb";

const Page = () => {
  const [cart, setCart] = useState({
    ...cartData,
  });

  const [checkoutSucc, setCheckoutSucc] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [delivery, setDelivery] = useState("shipping");
  return (
    <div className="w-full pt-10 pb-32 bg-color-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-3">
          {/* left */}
          <div className="w-full md:pr-3 md:w-[calc(100%-332px)]">
            <div className="w-full pb-10">
              <h4 className="text-s18 text-black pb-5 font-bold">
                BILLING INFORMATION
              </h4>
              <form className="w-full">
                {/* name and last name */}
                <div className="flex gap-4 pb-3 items-center justify-between">
                  <div className="w-[calc(50%-8px)]">
                    <label className="billing-label">
                      FIRST NAME{" "}
                      <span className="text-color-orange-deep">*</span>
                    </label>
                    <input
                      className="billing-input"
                      placeholder="Enter your first name..."
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-[calc(50%-8px)]">
                    <label className="billing-label">
                      LAST NAME{" "}
                      <span className="text-color-orange-deep">*</span>
                    </label>
                    <input
                      className="billing-input"
                      placeholder="Enter your last name..."
                      type="text"
                      required
                    />
                  </div>
                </div>
                {/* company name */}
                <div className="w-full pb-3">
                  <label className="billing-label">
                    COMPANY NAME{" "}
                    <span className="text-color-grey-deep text-sm">{`(optional)`}</span>
                  </label>
                  <input
                    className="billing-input"
                    placeholder="Enter your Company name..."
                    type="text"
                  />
                </div>
                {/* country or region */}
                <div className="w-full pb-3">
                  <label className="billing-label">
                    COUNTRY / REGION{" "}
                    <span className="text-color-orange-deep">*</span>
                  </label>
                  <select
                    className="billing-input"
                    placeholder="Enter your first name..."
                    type="text"
                    required
                  >
                    <option value="bangladesh" key="ban">
                      Bangladesh
                    </option>
                  </select>
                </div>
                {/* Street Address */}
                <div className="w-full pb-3">
                  <label className="billing-label">
                    STREET ADDRESS{" "}
                    <span className="text-color-orange-deep">*</span>
                  </label>
                  <input
                    className="billing-input"
                    placeholder="Enter your address..."
                    type="text"
                    required
                  />
                </div>
                {/* city or town and State */}
                <div className="flex gap-4 pb-3 items-center justify-between">
                  <div className="w-[calc(50%-8px)]">
                    <label className="billing-label">
                      TOWN / CITY{" "}
                      <span className="text-color-orange-deep">*</span>
                    </label>
                    <select
                      className="billing-input"
                      placeholder="Enter your first name..."
                      type="text"
                      required
                    >
                      <option value="patuakhali" key="ptk">
                        Patuakhali
                      </option>
                    </select>
                  </div>
                  <div className="w-[calc(50%-8px)]">
                    <label className="billing-label">
                      STATE <span className="text-color-orange-deep">*</span>
                    </label>
                    <select
                      className="billing-input"
                      placeholder="Enter your last name..."
                      type="text"
                      required
                    >
                      <option value="barishal" key="bar">
                        Barishal
                      </option>
                    </select>
                  </div>
                </div>
                {/* postal zip */}
                <div className="flex gap-4 pb-3 items-center justify-between">
                  <div className="w-[calc(50%-8px)]">
                    <label className="billing-label">
                      POSTAL ZIP{" "}
                      <span className="text-color-orange-deep">*</span>
                    </label>
                    <input
                      className="billing-input"
                      placeholder="Postal Zip code"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-[calc(50%-8px)]">
                    <label className="billing-label">
                      YOUR PHONE{" "}
                      <span className="text-color-orange-deep">*</span>
                    </label>
                    <input
                      className="billing-input"
                      placeholder="Enter your phone..."
                      type="text"
                      required
                    />
                  </div>
                </div>
                {/* email address */}
                <div className="w-full pb-3">
                  <label className="billing-label">
                    EMAIL ADDRESS{" "}
                    <span className="text-color-orange-deep">*</span>
                  </label>
                  <input
                    className="billing-input"
                    placeholder="Enter your Company name..."
                    type="email"
                    required
                  />
                </div>
                {/* delivery notes */}
                <div className="w-full pb-3">
                  <label className="billing-label">
                    ORDER YOU HAVE NOTES{" "}
                    <span className="text-color-grey-deep text-sm">{`(optional)`}</span>
                  </label>
                  <textarea
                    rows={5}
                    className="billing-input"
                    placeholder="Enter your Company name..."
                    type="email"
                    required
                  />
                </div>
                <button
                  className={`inline-block p-2 pl-3 pr-3
                 bg-color-secondary text-white text-s14 rounded-sm
                 hover:bg-opacity-90
                `}
                >
                  Save Chnages
                </button>
              </form>
            </div>
          </div>
          {/* right */}
          <div
            className={`w-full h-max md:w-80 bg-color-grey-deep-light min-h-[200px]
          p-3 pt-5 pb-5`}
          >
            <div className={`pb-3 border-b border-dashed`}>
              <h3 className={`text-black uppercase text-s14 font-bold`}>
                CART TOTALS
              </h3>
            </div>
            <div className={`pt-2`}>
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
                {/* apply coupon */}
                <div className="flex items-center gap-2 pb-2">
                  <form className="w-full">
                    <input
                      className={`p-1 pl-3 pr-3 h-7 text-sm border border-r-0 border-color-grey-light uppercase w-32 focus:outline-none focus:border-color-grey-deep`}
                      type="text"
                      required
                    />
                    <button
                      className={`inline-block p-1 h-7 bg-color-orange-deep text-sm text-white`}
                    >
                      <span className="p-1 pt-2 pb-2">Apply</span>
                    </button>
                  </form>
                </div>
                {/* delivery */}
                <div className="flex items-center gap-10 pt-2 pb-2 border-t border-dashed">
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
            </div>
            {/* payment methods */}
            <div className="w-full pt-3">
              <h3
                className={`text-black uppercase text-s14 font-bold border-b border-dashed pb-2`}
              >
                Payment Method
              </h3>
              <div className={`w-full`}>
                {/* cash on delivery */}
                <label className="block relative w-full cursor-pointer select-none pt-3">
                  <div className="flex items-center gap-2 border-b border-dashed pb-3">
                    <input
                      onChange={() => setPaymentMethod("cash")}
                      checked={paymentMethod === "cash"}
                      className={`w-4 h-4 peer checked:accent-color-orange-deep rounded-full`}
                      type="checkbox"
                    />
                    <span className="text-s14 uppercase font-bold peer-checked:text-color-orange-deep duration-300">
                      CASH ON DELIVERY
                    </span>
                  </div>
                </label>
                {/* paypal */}
                <div className="border-b border-dashed pb-3">
                  <label className="block relative w-full cursor-pointer select-none pt-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 ">
                        <input
                          onChange={() => setPaymentMethod("paypal")}
                          checked={paymentMethod === "paypal"}
                          className={`w-4 h-4 peer checked:accent-color-orange-deep rounded-full`}
                          type="checkbox"
                        />
                        <span className="text-s14 uppercase font-bold peer-checked:text-color-orange-deep duration-300">
                          Pay With Paypal
                        </span>
                      </div>
                      <Image
                        src={"/assets/images/paypal.png"}
                        width={50}
                        height={50}
                        style={{ width: 50, height: "auto" }}
                        alt=""
                      />
                    </div>
                  </label>
                  {/* info */}
                  <li className="list-item p-2 text-s10">
                    Pay via PayPal; you can pay with your credit card if you don
                    {`’`}t have a PayPal account
                  </li>
                </div>
                {/* cart Payment  */}
                <div className=" border-b border-dashed pb-3">
                  <label className="block relative w-full cursor-pointer select-none pt-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          onChange={() => setPaymentMethod("card")}
                          checked={paymentMethod === "card"}
                          className={`w-4 h-4 peer checked:accent-color-orange-deep rounded-full`}
                          type="checkbox"
                        />
                        <span className="text-s14 uppercase font-bold peer-checked:text-color-orange-deep duration-300">
                          Pay With Card
                        </span>
                      </div>
                      <Image
                        src={"/assets/images/payment_card.png"}
                        width={50}
                        height={50}
                        style={{ width: 50, height: "auto" }}
                        alt=""
                      />
                    </div>
                  </label>
                  {/* info */}
                  <li className="list-item p-2 text-s10">
                    your card information will securely saved on stripe
                    platform.we just request get payment via stripe.
                  </li>
                </div>
              </div>
            </div>
            {/* agree terms and condition */}
            <div className="w-full pt-5 pb-5">
              <label className="block relative">
                <div className="w-full flex items-center gap-2">
                  <input
                    className="w-4 h-4 checked:accent-color-orange-deep"
                    type="checkbox"
                  />
                  <p className="text-s11 text-color-grey-deep leading-3">
                    I have read and agree to the website{" "}
                    <a
                      className="text-color-secondary hover:text-color-orange-deep duration-300"
                      href="/support/terms"
                    >
                      terms
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-color-secondary hover:text-color-orange-deep duration-300"
                      href="/support/conditions"
                    >
                      conditions
                    </a>{" "}
                    <span className="text-sm text-color-orange-deep">*</span>
                  </p>
                </div>
              </label>
            </div>
            {/* checkout */}
            <div className="w-full pt-2 pb-5">
              <button
                onClick={() => setCheckoutSucc(true)}
                className="p-3 block w-full text-s14 font-bold text-white bg-color-orange-deep rounded"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {checkoutSucc ? (
        <Overlay>
          <div
            className={`w-full h-full flex items-center
         justify-center p-5 pt-20 pb-10 animate-popup-400`}
          >
            <div
              className={`min-w-[300px] w-2/3 min-h-[50px] p-2
             bg-color-primary shadow-2xl rounded border
              border-color-grey-light relative`}
            >
              {/* content */}
              <div className="relative">
                {/* close */}
                <div className="pt-2 w-full">
                  <div className="p-5">
                    <h1 className="text-center text-3xl font-extrabold">
                      Order has been Placed
                    </h1>
                    <div className="flex items-center justify-center pt-10 pb-5">
                      <TbDiscountCheck
                        className="text-color-orange-deep"
                        size={150}
                      />
                    </div>
                    <p className={`text-sm text-center p-5`}>
                      We have received your order and it is currently in the
                      process of being prepared for delivery. We are committed
                      to delivering your order within the specified timeframe,
                      with an estimated delivery window between July 23, 2023,
                      and July 29, 2023. We deeply appreciate your choice in
                      using our services
                    </p>
                    <a
                      className="mt-5 bg-color-orange-deep p-2 pl-3 pr-3 mb-10 m-auto block w-fit text-white rounded text-sm"
                      href="/"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setCheckoutSucc(false)}
                  className="absolute top-1 right-1 text-color-grey-deep hover:text-color-orange-deep duration-300"
                >
                  <AiOutlineCloseCircle size={25} />
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      ) : null}
    </div>
  );
};

export default Page;
