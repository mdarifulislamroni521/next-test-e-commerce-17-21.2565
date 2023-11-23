"use client";
import React from "react";
import AccSidebar from "../subComponents/AccSidebar";

const page = () => {
  return (
    <div className="w-full pt-10 pb-10">
      <div className="container">
        <div className="flex gap-3">
          <AccSidebar active="change-password" />
          <div className={`flex-1 bg-color-grey-light `}>
            <div
              className={`min-w-[300px] w-full sm:w-4/5 md:w-2/3 md1k:w-1/2
              rounded m-auto pb-5`}
            >
              <div className="p-2 pb-5">
                <h3 className="text-center text-xl font-extrabold pt-5 pb-5">
                  Chnage Password
                </h3>
                <div className="w-full pl-3 pr-3">
                  <form className="w-full">
                    {/* old password */}
                    <div className="w-full pb-3">
                      <label className="billing-label">
                        Old Password{" "}
                        <span className="text-color-orange-deep text-sm">
                          *
                        </span>
                      </label>
                      <input
                        className="billing-input"
                        placeholder="Enter your old password"
                        type="password"
                      />
                    </div>
                    {/* new password */}
                    <div className="w-full pb-3">
                      <label className="billing-label">
                        New Password{" "}
                        <span className="text-color-orange-deep text-sm">
                          *
                        </span>
                      </label>
                      <input
                        className="billing-input"
                        placeholder="Enter new password"
                        type="password"
                      />
                    </div>
                    {/* re new password */}
                    <div className="w-full pb-3">
                      <label className="billing-label">
                        Re Enter New Password{" "}
                        <span className="text-color-orange-deep text-sm">
                          *
                        </span>
                      </label>
                      <input
                        className="billing-input"
                        placeholder="Re-Enter new password"
                        type="password"
                      />
                    </div>
                    <button
                      className={`block mt-2 p-2 pl-3 pr-3 text-center bg-color-orange-deep
                 text-white m-auto text-sm rounded hover:bg-opacity-80`}
                    >
                      Chnage password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
