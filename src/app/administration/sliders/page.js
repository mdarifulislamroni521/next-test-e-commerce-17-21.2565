"use client";
import React, { useState } from "react";
import AdminSidebar from "../subComponents/AdminSidebar";
import Image from "next/image";
import { AiOutlineCloudUpload } from "react-icons/ai";

//temp data
import { sliders } from "@/app/data";
import SliderItem from "./SliderItem";

const Page = () => {
  const [createIcon, setCreateIcon] = useState(null);
  return (
    <div className="w-full">
      <div className="container pt-5 pb-10">
        <div className="flex gap-3">
          <AdminSidebar active="sliders" />
          <div className="flex-1">
            {/* create sliders */}
            <div className="w-full shadow p-2 ">
              <h3 className="text-center p-2 border-b border-dashed">
                Create New Slider
              </h3>
              <div
                className="w-full flex items-start gap-2 rounded 
              border-dashed pb-3 pt-3"
              >
                {/* slider image */}
                <div className="w-44 h-60 sm:h-44 border overflow-hidden">
                  <label className="block w-full h-full cursor-pointer relative">
                    <input
                      onChange={(e) => setCreateIcon(e.target.files[0])}
                      className="hidden"
                      accept=".png"
                      type="file"
                    />
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <AiOutlineCloudUpload
                        className="text-color-grey-deep"
                        size={20}
                      />
                    </div>
                    {createIcon && (
                      <Image
                        src={window.URL.createObjectURL(createIcon)}
                        width={100}
                        height={100}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        className="absolute w-full h-full top-0 left-0 bg-white"
                      />
                    )}
                  </label>
                </div>
                {/* inputs */}
                <div className="flex flex-col gap-2 flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      placeholder="Short Title (20 charators)"
                      className={`flex-1 p-2 border border-color-grey-light
                  focus:outline-none focus:border-color-grey-deep rounded text-sm`}
                      type="text"
                    />
                    <input
                      placeholder="Button Title"
                      className={`flex-1 p-2 border border-color-grey-light
                  focus:outline-none focus:border-color-grey-deep rounded text-sm`}
                      type="text"
                    />
                    <input
                      placeholder="Button URL"
                      className={`flex-1 p-2 border border-color-grey-light
                  focus:outline-none focus:border-color-grey-deep rounded text-sm`}
                      type="text"
                    />
                  </div>
                  <input
                    placeholder="Title (50 charators)"
                    className={`flex-1 p-2 border border-color-grey-light
                  focus:outline-none focus:border-color-grey-deep rounded text-sm`}
                    type="text"
                  />
                  <textarea
                    rows={2}
                    placeholder="Description (200 charactors)"
                    className={`flex-1 p-2 border border-color-grey-light
                  focus:outline-none focus:border-color-grey-deep rounded text-sm`}
                    type="text"
                  />
                  <div className="w-full">
                    <button
                      className="text-sm p-1 pl-2 pr-2 bg-color-orange-deep 
                    text-white hover:bg-opacity-80 rounded"
                    >
                      Create Slider
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* manage sliders */}
            <div
              className="w-full mt-3
            "
            >
              <div className="flex flex-col gap-2">
                {sliders.map((slider, index) => {
                  return <SliderItem slider={slider} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
