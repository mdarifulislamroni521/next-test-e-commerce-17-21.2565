"use client";
import React from "react";
import AdminSidebar from "../subComponents/AdminSidebar";
import { CiBadgeDollar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import { coupons } from "@/app/data";
import moment from "moment";

const Page = () => {
  return (
    <div className="w-full">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="coupons" />
          <div className="flex-1">
            {/* create new */}
            <div className="w-full  pt-2 pb-2">
              <div className="w-full flex items-center gap-2">
                <input
                  placeholder="Enter new Coupon"
                  className={`flex-1 p-2 border border-color-grey-light
                  focus:outline-none focus:border-color-grey-deep rounded text-sm`}
                  type="text"
                />
                <select
                  className={`w-28 flex gap-1 items-center p-2 border border-color-grey-light
                   rounded text-sm focus:outline-none`}
                >
                  <option value="firstime" key="first">
                    Firstime
                  </option>
                  <option value="always" key="always">
                    Always
                  </option>
                </select>
                <select
                  className={`w-28 flex gap-1 items-center p-2 border border-color-grey-light
                   rounded text-sm focus:outline-none`}
                >
                  <option value="constant" key="const">
                    Constant
                  </option>
                  <option value="persentage" key="persent">
                    Persentage
                  </option>
                </select>
                <div
                  className={`w-28 flex gap-1 items-center p-2 border border-color-grey-light rounded`}
                >
                  <CiBadgeDollar size={18} />
                  <input
                    maxLength={2}
                    placeholder="Enter Discount amount"
                    className={`w-full focus:outline-none input-spin-visible focus:border-color-grey-deep text-sm`}
                    type="number"
                    value={1}
                    onChange={() => {}}
                  />
                </div>
                <button
                  className={`bg-color-orange-deep rounded text-sm 
        block p-2 pl-3 pr-3 text-white hover:bg-opacity-80`}
                >
                  Search
                </button>
              </div>
            </div>
            {/* coupons list */}
            <div className="w-full overflow-x-scroll xsm400:overflow-x-hidden">
              <table id="user-table" className="w-full border-collapse">
                <thead>
                  <tr key="header">
                    <th>name</th>
                    <th>Availablity</th>
                    <th>type</th>
                    <th className="w-28">amount</th>
                    <th className="w-28">created</th>
                    <th className="w-5">_</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map((coupon, index) => {
                    return (
                      <tr key={index}>
                        <td>{coupon.name}</td>
                        <td>{coupon.availablity}</td>
                        <td>{coupon.type}</td>
                        <td>${coupon.amount}</td>
                        <td>{moment(coupon.created).format("DD MMM YYYY")}</td>
                        <td>
                          <button className="hover:text-color-orange-deep">
                            <MdDelete size={20} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
