import React from "react";
import Image from "next/image";
import Rating from "@/app/components/Rating";
import ProductActions from "@/app/home/layouts/product/ProductActions";
import ProductDetails from "@/app/home/layouts/product/ProductDetails";
import ProductReviews from "@/app/home/layouts/product/ProductReviews";

import { htmlDescriptiopn, productRevires } from "@/app/data";

const page = () => {
  return (
    <div className="w-full min-h-[500px] block bg-white">
      {/* product header */}
      <div
        className={`p-10 pt-24 pb-24 flex flex-col justify-center items-center bg-product-hero`}
      >
        <h1 className="font-extrabold text-5xl text-black">SHOP NOW</h1>
        <div
          className={`flex items-center justify-center p-2 gap-2 pl-8 pr-8 mt-5 bg-white rounded-full`}
        >
          <a
            href="/"
            className="text-s14 text-color-grey-deep hover:text-color-orange-deep duration-300"
          >
            Home
          </a>
          <span className="w-1 h-1 rounded-full bg-color-grey-deep"></span>
          <span className="text-color-orange-deep text-s14">
            The Christina Fashion...
          </span>
        </div>
      </div>
      {/* product info  */}
      <div className="w-full pt-16 pb-16 bg-color-primary">
        <div className="container flex flex-col smd:flex-row gap-3 md800:gap-5 md1k:gap-8 lg11k:gap-16">
          {/* flex left */}
          <div className="w-full smd:w-3/4 md1k:w-1/2  flex flex-col-reverse md1k:flex-row gap-3">
            <div
              className={`w-2/3 md1k:w-24 max-h-[550px] md:max-h-[600px] md1k:overflow-hidden select-none flex flex-row md1k:flex-col gap-3 relative`}
            >
              <Image
                alt=""
                src={
                  "https://themebeyond.com/html/venam/img/product/sd_bottom01.jpg"
                }
                width={100}
                height={120}
                draggable={false}
                style={{ width: "100%", height: "auto", userSelect: "none" }}
              />
              <Image
                alt=""
                src={
                  "https://themebeyond.com/html/venam/img/product/sd_bottom02.jpg"
                }
                width={100}
                height={120}
                draggable={false}
                style={{ width: "100%", height: "auto", userSelect: "none" }}
              />
              <Image
                alt=""
                src={
                  "https://themebeyond.com/html/venam/img/product/sd_bottom03.jpg"
                }
                width={100}
                height={120}
                draggable={false}
                style={{ width: "100%", height: "auto", userSelect: "none" }}
              />
              <Image
                alt=""
                src={
                  "https://themebeyond.com/html/venam/img/product/sd_bottom04.jpg"
                }
                width={100}
                height={120}
                draggable={false}
                style={{ width: "100%", height: "auto", userSelect: "none" }}
              />
              {/* <Image alt=""
                src={
                  "https://themebeyond.com/html/venam/img/product/sd_bottom01.jpg"
                }
                width={100}
                height={120}
                draggable={false}
                style={{ width: "100%", height: "auto", userSelect: "none" }}
              /> */}
            </div>
            <div className="flex-1 product-img-preview ">
              <Image
                alt=""
                src={
                  "https://themebeyond.com/html/venam/img/product/shop_details_img01.jpg"
                }
                // layout="fill"
                // objectFit="contain"
                width={500}
                height={650}
                className="bg-color-grey-deep-light"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          {/* flex right */}
          <div className="flex-1 gap-2 pt-5 md:pt-0">
            <span className="bg-color-orange-deep text-white p-1 pl-3 pr-3 rounded inline-block text-sm">
              In Stock
            </span>
            <h3 className="text-2xl text-black font-extrabold pt-4 pb-4">
              The Christina Fashion
            </h3>
            <div className="pb-4 flex items-center gap-1">
              <Rating avg={3.2} size={13} />
              <span className="text-sm text-color-grey-deep">
                - 3 Customer Reviews
              </span>
            </div>
            {/* price  */}
            <div className="flex items-center gap-5">
              <span className="text-2xl text-color-orange-deep font-extrabold">
                $29.00
              </span>
              <del className="text-color-grey-deep text-s14 italic font-extrabold">
                $49.00
              </del>
            </div>
            {/* short description */}
            <p className="pt-5 pb-5 text-s14 leading-7 text-color-grey-deep">
              Cramond Leopard & Pythong Print Anorak Jacket In Beige but also
              the leap into electronic typesetting, remaining
            </p>
            {/* product actions */}
            <div className="text-color-grey-deep">
              {/* sizes */}
              <div className="flex items-center gap-2">
                <h4>Size : </h4>
                <a
                  href="/support/guide"
                  className="text-sm underline hover:text-color-orange-deep"
                >
                  Guide
                </a>
                <a
                  href="/support/cant-find-size"
                  className="text-sm underline hover:text-color-orange-deep"
                >
                  Can{`'`}t Find Your Size?
                </a>
              </div>

              {/* select sizes */}
              <ProductActions
                actionData={{
                  sizes: ["XXS", "XS", "S", "M", "L"],
                  tags: [
                    "SHART",
                    "T-SHART",
                    "CLOTH",
                    "PHYSICAL PRODUCT",
                    "WOMEN",
                    "GRILS",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* product details  */}
      <ProductDetails htmlDescriptiopn={htmlDescriptiopn} />
      {/* product reviews */}
      <ProductReviews productRevires={productRevires} />
    </div>
  );
};

export default page;
