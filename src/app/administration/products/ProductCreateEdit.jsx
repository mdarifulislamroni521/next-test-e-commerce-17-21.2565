"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { BsCloudUpload } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

// temp data
import { sizes, colors } from "@/app/data";

const ProductCreate = ({ data = {}, Etype = "create" }) => {
  const [value, setValue] = useState("");
  const [pictures, setPictures] = useState([]);
  const [tags, setTags] = useState([]);
  const [sizesSet, setSizesset] = useState(["M"]);
  const [colorsSel, setColorSel] = useState([
    { name: "black", colorHex: "#434343" },
  ]);
  const [productDetails, setProductDetails] = useState("");
  // fiels
  const chnageImage = (event) => {
    try {
      const files = event.target.files;
      setPictures([...pictures, ...files]);
    } catch {}
  };

  const addtag = async (event) => {
    try {
      event.preventDefault();
      const tag = event.target.childNodes[0].value;
      if (tag.trim().length > 0 && tags.length < 15) {
        setTags([...tags, tag]);
        event.target.childNodes[0].value = "";
      }
    } catch {}
  };

  const removeTag = (index) => {
    const updatedTags = [];
    for (let [indexT, tag] of tags.entries()) {
      if (index !== indexT) {
        updatedTags.push(tag);
      }
    }
    setTags(updatedTags);
  };

  const selectSize = (size) => {
    if (sizesSet.includes(size) && sizesSet.length > 1) {
      const updatedSizes = [];
      for (let sizeLoc of sizesSet) {
        if (size !== sizeLoc) {
          updatedSizes.push(sizeLoc);
        }
      }
      setSizesset(updatedSizes);
    } else {
      setSizesset([...sizesSet, size]);
    }
  };

  const updateColors = (e, colorObject) => {
    if (e.target.checked && !colorsSel.includes(colorObject)) {
      setColorSel([...colorsSel, colorObject]);
    } else if (
      !e.target.checked &&
      colorsSel.includes(colorObject) &&
      colorsSel.length > 1
    ) {
      const updatedColors = [];
      for (let colorLoc of colorsSel) {
        if (colorLoc !== colorObject) {
          updatedColors.push(colorObject);
        }
      }
      setColorSel(updatedColors);
    }
  };
  return (
    <div className="w-full pt-5 bg-white rounded">
      <div className="full">
        <div className="flex items-center gap-2 flex-wrap">
          {/* images */}
          {pictures?.map((pic, index) => {
            return (
              <div
                key={index}
                className="w-[calc(25%-8px)] h-[100px] overflow-hidden border"
              >
                <Image
                  objectFit="cover"
                  src={window.URL.createObjectURL(pic)}
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
            );
          })}

          {/* upload image */}
          <div className="flex-1 h-[100px]">
            <label className="block relative w-full h-full cursor-pointer">
              <input
                onChange={chnageImage}
                className="hidden w-0 h-0"
                type="file"
                accept=".png, .jpg,"
                multiple
              />
              <div className="w-full h-full border border-dashed relative">
                <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-1 justify-center items-center">
                  <BsCloudUpload size={30} className="text-black" />

                  <span className="text-s14 font-bold">Upload Photos</span>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* title */}
        <div className="w-full pt-2">
          <label className="billing-label">
            Product title Title{" "}
            <span className="text-color-orange-deep text-sm">*</span>
            <sup>
              <span className="text-s10">{` (0/50)`}</span>
            </sup>
          </label>
          <input
            maxLength={50}
            className="global-input"
            placeholder="Enter Title"
            type="text"
          />
        </div>
        {/* short */}
        <div className="w-full pt-2">
          <label className="global-label">
            Short Description{" "}
            <span className="text-color-orange-deep text-sm">*</span>
            <sup>
              <span className="text-s10">{` (0/150)`}</span>
            </sup>
          </label>
          <textarea
            maxLength={150}
            rows={3}
            className="global-input"
            placeholder="White short description"
            type="text"
          />
        </div>
        {/* long description */}
        <div className="w-full ">
          <label className="global-label">
            Product Details{" "}
            <span className="text-color-orange-deep text-sm">*</span>
          </label>
          <div className="w-full">
            <ReactQuill
              theme="snow"
              modules={{
                toolbar: [
                  [{ size: ["small", false, "large", "huge"] }],
                  ["bold", "italic", "underline", "strike"],
                  ["link"],
                  [{ color: [] }, { background: [] }],
                  [{ font: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                ],
              }}
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        {/* Pricing and stock */}
        <div className="pt-2 grid gap-3 grid-cols-1 sm:grid-cols-3">
          <div className="w-full ">
            <label className="global-label">
              Regular Price{" "}
              <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <input
              maxLength={50}
              className="global-input input-spin-visible"
              placeholder="Enter Regular price"
              type="number"
            />
          </div>
          <div className="w-full ">
            <label className="global-label">
              Final Price{" "}
              <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <input
              maxLength={50}
              className="global-input input-spin-visible"
              placeholder="Enter final price"
              type="number"
            />
          </div>
          <div className="w-full ">
            <label className="global-label">
              Total Stock{" "}
              <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <input
              maxLength={50}
              className="global-input input-spin-visible"
              placeholder="Enter Total stock"
              type="number"
            />
          </div>
        </div>
        {/* category and sub categorys */}
        <div className="grid gap-3  grid-cols-1 sm:grid-cols-2">
          <div className="w-full pt-2">
            <label className="global-label">
              Category <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <select
              className="global-input"
              placeholder="Enter final price"
              type="number"
            >
              <option value="dress" key="dress">
                Woman
              </option>
            </select>
          </div>
          <div className="w-full pt-2">
            <label className="global-label">
              Sub Category{" "}
              <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <select
              className="global-input"
              placeholder="Enter final price"
              type="number"
            >
              <option disabled value="dress" key="dress">
                Loading ...
              </option>
              <option value="woman" key="woman">
                Woman
              </option>
            </select>
          </div>
        </div>
        {/* tags */}
        <div className="w-full pt-2">
          <label className="billing-label">
            Tags <span className="text-color-orange-deep text-sm">*</span>
            <sup>
              <span className="text-s10">{` (${tags.length}/15)`}</span>
            </sup>
          </label>
          <div className="flex flex-wrap items-center gap-1 border rounded p-2">
            {tags.map((tag, index) => {
              return (
                <div
                  className="border flex p-1 pl-1 pr-1 text-sm group items-center gap-1"
                  key={index}
                >
                  {tag}
                  <button
                    onClick={() => removeTag(index)}
                    className={`h-full bg-color-grey-light rounded
                           hover:bg-color-orange-deep hover:text-white duration-300`}
                  >
                    <IoCloseSharp size={15} />
                  </button>
                </div>
              );
            })}
            {tags.length < 15 && (
              <form onSubmit={addtag} className="flex-1">
                <input
                  maxLength={50}
                  className="border-none pl-1 global-input min-w-[100px]"
                  placeholder="Enter Tag and enter to listing"
                  type="text"
                />
              </form>
            )}
          </div>
        </div>

        {/* color and sizes */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
          <div className="w-full pt-2">
            <label className="global-label">
              Sizes <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              {sizes.map((size, index) => {
                return (
                  <span
                    onClick={() => selectSize(size)}
                    key={index}
                    className={`border border-color-grey-deep inline-block pl-3 pr-3 rounded 
                             duration-300 cursor-pointer ${
                               sizesSet.includes(size)
                                 ? "bg-color-orange-deep border-color-orange-deep text-white"
                                 : ""
                             }`}
                  >
                    {size}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="w-full pt-2 pb-5">
            <label className="global-label">
              Colors <span className="text-color-orange-deep text-sm">*</span>
            </label>
            <div className="flex items-center gap-2 flex-wrap">
              {colors?.map((color, indexS) => {
                return (
                  <label
                    key={indexS}
                    className="relative  block cursor-pointer w-max"
                  >
                    <input
                      checked={colorsSel.includes(color)}
                      onChange={(e) => updateColors(e, color)}
                      type="checkbox"
                      className="w-0 h-0 block opacity-0 peer"
                    />
                    <div
                      style={{ backgroundColor: color.colorHex }}
                      className="w-8 h-8 rounded-full color-checked"
                    ></div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* submit */}
        <div className="w-full pt-5 pb-10 border-t border-dashed ">
          <button className="bg-color-orange-deep p-2 pl-3 pr-3 rounded hover:bg-opacity-80 text-sm text-white">
            Create new product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
