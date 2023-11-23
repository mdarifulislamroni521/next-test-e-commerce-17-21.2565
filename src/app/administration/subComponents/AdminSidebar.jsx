"use client";
import React, { useState } from "react";
import Link from "next/link";

import { CgMenuGridO } from "react-icons/cg";
import { LuStepBack } from "react-icons/lu";

const AdminSidebar = ({ active = "dashboard" }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-max h-full">
      <button
        onClick={() => setOpen(!open)}
        className="text-black p-1 mt-2 bg-color-grey-light rounded mb-2 md:hidden"
      >
        <CgMenuGridO size={20} />
      </button>
      <div
        className={`bg-color-grey-deep-light md:bg-color-grey-light p-2 w-56 h-screen
         absolute top-0 left-0 ${
           open ? "translate-x-0" : "-translate-x-full"
         } md:relative md:top-auto md:h-auto block transition-all 
         duration-300 z-10`}
      >
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-sm block border-b-2 border-dashed pb-2">
            Hi, @mdmin
          </h5>
          <button
            onClick={() => setOpen(!open)}
            className="p-1 bg-color-grey-light rounded md:hidden"
          >
            <LuStepBack size={20} />
          </button>
        </div>

        <ul className="w-full pt-2 pb-5 flex flex-col gap-2">
          <li className="w-full block">
            <Link
              className={`block ${
                active === "dashboard"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration"}
            >
              Dashboard
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "settings"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/settings"}
            >
              Settings
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "sliders"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/sliders"}
            >
              Sliders
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "categorys"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/categorys"}
            >
              Categorys
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "customers"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  shadow 
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/customers"}
            >
              Customers
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "coupons"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  shadow 
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/coupons"}
            >
              Coupons
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "products"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  shadow 
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/products"}
            >
              Products
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "orders"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              }  shadow 
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/administration/manage-orders"}
            >
              Orders
            </Link>
          </li>
          <li className="w-full block">
            <Link
              className={`block ${
                active === "change-password"
                  ? "bg-color-orange-deep text-white"
                  : "bg-color-primary text-black"
              } 
        p-2 rounded text-s13  hover:bg-opacity-80`}
              href={"/my-account/change-password"}
            >
              Change Password
            </Link>
          </li>
        </ul>
        <p className="pt-5 pb-2 text-color-grey-deep text-sm text-center">
          v 0.1.5
        </p>
      </div>
    </div>
  );
};

export default AdminSidebar;
