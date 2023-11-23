"use client";
import React, { useState } from "react";
import ProductCreateEdit from "./ProductCreateEdit";
import AdminSidebar from "../subComponents/AdminSidebar";
import ProductManage from "./ProductManage";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("manage");
  return (
    <div className="w-full">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="products" />
          <div className="flex-1">
            {/* product create */}
            <div className="w-full flex gap-2 bg-color-grey-light p-[1px] transition-all duration-300">
              <button
                onClick={() => setSelectedTab("manage")}
                className={`text-sm text-color-grey-deep border-b  
            block p-2 ${
              selectedTab === "manage"
                ? "border-color-orange-deep bg-color-grey-deep-light"
                : "border-transparent"
            }`}
              >
                Manage
              </button>
              <button
                onClick={() => setSelectedTab("create")}
                className={`text-sm text-color-grey-deep border-b 
            block p-2  ${
              selectedTab === "create"
                ? "border-color-orange-deep bg-color-grey-deep-light"
                : "border-transparent"
            }`}
              >
                Create New
              </button>
            </div>
            {selectedTab === "manage" ? (
              <ProductManage />
            ) : (
              <ProductCreateEdit Etype="create" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
