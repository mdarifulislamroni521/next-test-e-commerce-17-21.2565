"use client";
import React, { useState } from "react";
import AccSidebar from "../subComponents/AccSidebar";
import Image from "next/image";

import { BsCloudUpload } from "react-icons/bs";

const Page = () => {
  const [updatedPhoto, setUpdatedPhoto] = useState(null);
  const chnageImage = (event) => {
    try {
      const file = event.target.files[0];
      setUpdatedPhoto(file);
    } catch {}
  };
  return (
    <div className="w-full min-h-[300px] bg-color-primary">
      <div className="container">
        <div className="flex gap-3 pt-5 pb-16">
          <AccSidebar active="profile" />
          <div className="flex-1">
            {/* profile */}
            <div className="flex items-center gap-2">
              {/* profile image */}
              <div className="w-[100px] h-[100px] overflow-hidden border">
                <Image
                  objectFit="cover"
                  src={
                    updatedPhoto
                      ? window.URL.createObjectURL(updatedPhoto)
                      : "/assets/images/profile.png"
                  }
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="flex-1 h-[100px]">
                <label className="block relative w-full h-full cursor-pointer">
                  <input
                    onChange={chnageImage}
                    className="hidden w-0 h-0"
                    type="file"
                    accept=".png, .jpg,"
                  />
                  <div className="w-full h-full border border-dashed relative">
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 justify-center items-center">
                      <BsCloudUpload size={30} className="text-black" />

                      <span className="text-s14 font-bold">Upload Photo</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            {/* billing informations */}
            <form className="w-full pt-3">
              {/* name and last name */}
              <div className="flex gap-4 pb-3 items-center justify-between">
                <div className="w-[calc(50%-8px)]">
                  <label className="billing-label">
                    FIRST NAME <span className="text-color-orange-deep">*</span>
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
                    LAST NAME <span className="text-color-orange-deep">*</span>
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
                    POSTAL ZIP <span className="text-color-orange-deep">*</span>
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
                    YOUR PHONE <span className="text-color-orange-deep">*</span>
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
      </div>
    </div>
  );
};

export default Page;
