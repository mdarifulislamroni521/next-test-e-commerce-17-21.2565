import React, { useState, useRef } from "react";
import Image from "next/image";
import ReactToPrint from "react-to-print";

import { BsCartPlus } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { LuPackageOpen } from "react-icons/lu";

import ReceiptPdf from "./ReceiptPdf";

const OrderItem = ({ order }) => {
  const receiptRef = useRef();
  const [progress, setProgress] = useState(
    order?.progress ? order.progress : 1
  );
  const chnageProgress = (ev, index) => {
    if (ev.target.checked) {
      setProgress(index);
    } else {
      setProgress(1);
    }
  };
  return (
    <div
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
          <span
            className={`text-sm 
        text-color-grey-deep block italic`}
          >
            @ username
          </span>
          <a
            href="/product/123"
            className={`text-sm font-bold text-color-orange-deep`}
          >
            {order.title}
          </a>
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-s14 text-black input-global">$69.00</span>
            <select
              className={`inline w-20 border border-color-grey-light
           rounded focus:outline-none text-sm`}
            >
              <option value="updaid" key="updaid">
                Un Paid
              </option>
              <option value="processing" key="processing">
                Processing
              </option>
              <option value="paid" key="paid">
                Paid
              </option>
              <option value="canceled" key="canceled">
                Canceled
              </option>
            </select>

            <span className="text-sm text-black">15 November 2023</span>
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
  border-2 ${order.progress > 0 ? "border-green-500" : "border-transparent"}`}
                >
                  <BsCartPlus
                    size={15}
                    className={`${
                      progress > 0 ? "text-green-500" : "text-color-orange-deep"
                    }`}
                  />
                </div>
                {/* <div className="flex-1 h-[1px] border-t"></div> */}
              </div>
              {/* progress item 2 */}
              <div className="flex gap-1 items-center w-1/4">
                <div
                  className={`flex-1 h-[1px] border-t ${
                    progress > 1
                      ? "border-green-500"
                      : "border-color-grey-light"
                  } `}
                ></div>
                <div
                  className={`w-8 h-8 bg-color-grey-light rounded-full 
  flex items-center justify-center border-2 border-transparent ${
    order.progress > 1 ? "border-green-500" : "border-transparent"
  }`}
                >
                  <TfiPackage
                    size={15}
                    className={`${
                      progress > 1 ? "text-green-500" : "text-color-orange-deep"
                    }`}
                  />
                </div>
              </div>
              {/* progress item 3 */}
              <div className="flex gap-1 items-center w-1/4">
                <div
                  className={`flex-1 h-[1px] border-t ${
                    progress > 2
                      ? "border-green-500"
                      : "border-color-grey-light"
                  } `}
                ></div>
                <div
                  className={`w-8 h-8 bg-color-grey-light rounded-full 
  flex items-center justify-center border-2 border-transparent ${
    order.progress > 2 ? "border-green-500" : "border-transparent"
  }`}
                >
                  <LiaTruckPickupSolid
                    size={15}
                    className={`${
                      progress > 2 ? "text-green-500" : "text-color-orange-deep"
                    }`}
                  />
                </div>
              </div>
              {/* progress item 4 */}
              <div className="flex gap-1 items-center w-1/4">
                <div
                  className={`flex-1 h-[1px] border-t ${
                    progress > 3
                      ? "border-green-500"
                      : "border-color-grey-light"
                  }`}
                ></div>
                <div
                  className={`w-8 h-8 bg-color-grey-light rounded-full 
  flex items-center justify-center border-2 border-transparent ${
    progress > 3 ? "border-green-500" : "border-transparent"
  }`}
                >
                  <LuPackageOpen
                    size={15}
                    className={`${
                      progress > 3 ? "text-green-500" : "text-color-orange-deep"
                    }`}
                  />
                </div>
              </div>
            </div>
            {/* progress title */}
            <div className="flex items-center gap-2 pt-2">
              {/* progress title 1 */}
              <div className="w-1/4">
                <input
                  onChange={(e) => chnageProgress(e, 1)}
                  checked={progress === 1}
                  type="checkbox"
                  className={`w-4 h-4 ml-2 checked:accent-green-300`}
                />
              </div>
              {/* progress title 1 */}
              <div className="w-1/4">
                <input
                  onChange={(e) => chnageProgress(e, 2)}
                  checked={progress === 2}
                  type="checkbox"
                  className={`w-4 h-4 ml-3 checked:accent-green-300`}
                />
              </div>
              {/* progress title 1 */}
              <div className="w-1/4">
                <input
                  onChange={(e) => chnageProgress(e, 3)}
                  checked={progress === 3}
                  type="checkbox"
                  className={`w-4 h-4 ml-3 checked:accent-green-300`}
                />
              </div>
              {/* progress title 1 */}
              <div className="w-1/4">
                <input
                  onChange={(e) => chnageProgress(e, 4)}
                  checked={progress === 4}
                  type="checkbox"
                  className={`w-4 h-4 ml-3 checked:accent-green-300`}
                />
              </div>
            </div>
          </div>
          {/* action bar */}
          <div className="w-0 h-0 overflow-hidden">
            <div ref={receiptRef} className="w-full">
              <ReceiptPdf />
              <ReceiptPdf to="manager" />
            </div>
          </div>
          <div className="w-full pt-2 pb-3 flex items-center flex-wrap gap-2">
            <button
              className={`text-sm bg-color-orange-deep
        text-white p-1 pl-2 pr-2 rounded`}
            >
              Update Chnages
            </button>
            <ReactToPrint
              documentTitle={`order-${Math.floor(
                Math.random() * 125623121
              )}.pdf`}
              trigger={() => {
                return (
                  <button
                    className={`text-sm bg-color-grey-deep
                text-white p-1 pl-2 pr-2 rounded`}
                  >
                    Download pdf
                  </button>
                );
              }}
              content={() => receiptRef.current}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
