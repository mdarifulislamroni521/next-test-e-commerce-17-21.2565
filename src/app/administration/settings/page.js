"use client";
import React, { useState } from "react";
import AdminSidebar from "../subComponents/AdminSidebar";

const Page = () => {
  const [paymentMethods, setPaymentMethods] = useState(["cash"]);

  const updatePaymentMethods = async (ev, pm) => {
    const isAvailable = paymentMethods.includes(pm);
    const isLength = paymentMethods.length > 1;

    if (ev.target.checked && !isAvailable) {
      setPaymentMethods([...paymentMethods, pm]);
    } else if (!ev.target.checked && isAvailable && isLength) {
      const updatedPm = [];
      for (let pmL of paymentMethods) {
        if (pmL !== pm) {
          updatedPm.push(pm);
        }
      }
      setPaymentMethods(updatedPm);
    }
  };
  return (
    <div className="w-full">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="settings" />
          <div className="flex-1 pb-2">
            {/* name and last name */}
            <div className="grid gap-2 pb-3 grid-cols-1 md:grid-cols-3">
              <div className="w-full">
                <label className="billing-label">
                  USD Rate{" "}
                  <span className="text-color-grey-deep text-s10">{`(API genarated)`}</span>
                </label>
                <div className="global-input">
                  <span>1.00</span>
                </div>
              </div>
              <div className="w-full">
                <label className="billing-label">
                  EUR Rate{" "}
                  <span className="text-color-grey-deep text-s10">{`(API genarated)`}</span>
                </label>
                <div className="global-input">
                  <span>0.92</span>
                </div>
              </div>
              <div className="w-full">
                <label className="billing-label">
                  GBP Rate{" "}
                  <span className="text-color-grey-deep text-s10">{`(API genarated)`}</span>
                </label>
                <div className="global-input">
                  <span>0.80</span>
                </div>
              </div>
            </div>
            {/* links settings */}
            <div className={`w-full rounded p-2 shadow-border mb-3`}>
              <h3 className="text-center text-black p-3 border-b border-dashed">
                Links Settings
              </h3>
              {/* Privacy policy link */}
              <div className="w-full pb-3 pt-3">
                <label className="global-label">
                  Privacy Policy URL{" "}
                  <span className="text-color-orange-deep">*</span>
                </label>
                <input
                  className="global-input"
                  placeholder="Enter your Company name..."
                  type="text"
                />
              </div>
              {/* Privacy policy link */}
              <div className="w-full pb-3">
                <label className="global-label">
                  Help URL <span className="text-color-orange-deep">*</span>
                </label>
                <input
                  className="global-input"
                  placeholder="Enter your Company name..."
                  type="text"
                />
              </div>
            </div>
            {/* cart settings */}
            <div className={`w-full rounded p-2 shadow-border mb-2`}>
              <h3 className="text-center text-black p-3 border-b border-dashed">
                Cart Settings
              </h3>
              {/*  Maximum Quantitys */}
              <div className="w-full pb-3 pt-3">
                <label className="global-label">
                  Maximum Quantitys{" "}
                  <span className="text-color-orange-deep">*</span>
                </label>
                <input
                  className="global-input"
                  placeholder="Enter your Company name..."
                  type="text"
                />
              </div>
              {/* Delivery Fees */}
              <div className="w-full pb-3">
                <label className="global-label">
                  Delivery Fees{" "}
                  <span className="text-color-orange-deep">*</span>
                </label>
                <input
                  className="global-input"
                  placeholder="Enter your Company name..."
                  type="text"
                />
              </div>
              {/* Client Pickup Fees*/}
              <div className="w-full pb-3">
                <label className="global-label">
                  Client Pickup Fees{" "}
                  <span className="text-color-orange-deep">*</span>
                </label>
                <input
                  className="global-input"
                  placeholder="Enter your Company name..."
                  type="text"
                />
              </div>
              {/* payment method */}
              <div className="w-full pb-3">
                <label className="global-label">
                  Available Payment Method{" "}
                  <span className="text-color-grey-deep">{`(minimum 1)`}</span>
                  <div className="flex items-center gap-2 flex-wrap pt-4">
                    <label className={`block`}>
                      <input
                        className="hidden peer"
                        checked={paymentMethods.includes("cash")}
                        onChange={(e) => updatePaymentMethods(e, "cash")}
                        type="checkbox"
                      />
                      <span
                        className={`p-2 text-sm border rounded border-color-grey-deep text-color-grey-deep
                         peer-checked:border-color-orange-deep peer-checked:bg-color-orange-deep peer-checked:text-white
                         select-none duration-300 cursor-pointer`}
                      >
                        Cash On Delivery
                      </span>
                    </label>
                    <label className={`block`}>
                      <input
                        className="hidden peer"
                        checked={paymentMethods.includes("paypal")}
                        onChange={(e) => updatePaymentMethods(e, "paypal")}
                        type="checkbox"
                      />
                      <span
                        className={`p-2 text-sm border rounded border-color-grey-deep text-color-grey-deep
                         peer-checked:border-color-orange-deep peer-checked:bg-color-orange-deep peer-checked:text-white
                         select-none duration-300 cursor-pointer`}
                      >
                        Paypal
                      </span>
                    </label>
                    <label className={`block`}>
                      <input
                        className="hidden peer"
                        checked={paymentMethods.includes("card")}
                        onChange={(e) => updatePaymentMethods(e, "card")}
                        type="checkbox"
                      />
                      <span
                        className={`p-2 text-sm border rounded border-color-grey-deep text-color-grey-deep
                         peer-checked:border-color-orange-deep peer-checked:bg-color-orange-deep peer-checked:text-white
                         select-none duration-300 cursor-pointer`}
                      >
                        Card Payment
                      </span>
                    </label>
                  </div>
                </label>
              </div>
            </div>

            {/* save */}
            <div className="w-full pt-2 pb-3">
              <button
                className="text-sm bg-color-orange-deep text-white hover:bg-opacity-80 
              p-2 pl-3 pr-3 rounded"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
