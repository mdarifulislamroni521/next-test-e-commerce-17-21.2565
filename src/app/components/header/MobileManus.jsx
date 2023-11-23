"use client";
import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

const MobileManus = ({
  active = "",
  subactive = "",
  mobileop = false,
  setmobileop = () => {},
}) => {
  const [mobileExand, setMobileExpand] = useState(active);
  return (
    <div
      className={`${
        mobileop ? "translate-x-0 ml-0" : "translate-x-full -ml-80"
      } fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-70 duration-300 ease-in-out z-50`}
    >
      <div className="relative block w-full h-full">
        <div
          onClick={() => setmobileop(!mobileop)}
          className="absolute bg-black bg-opacity-0 top-0 left-0 right-0 cursor-pointer bottom-0 z-10"
        ></div>
        <div
          className={`absolute bg-[#202020] w-80 h-screen right-0 top-0 z-20 `}
        >
          <div className="relative">
            <div className="w-full p-3 pt-7">
              {/* logo */}
              <div className="w-40 h-auto">
                <img src="/assets/logo/logo-tech.png" alt="" />
              </div>
              {/* menus */}
              <ul className="w-full pt-5 border-b border-color-grey-deep  text-color-primary">
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep ${
                    mobileExand === "home" ? "max-h-[300px]" : "max-h-[41px]"
                  }   overflow-hidden duration-1000 transition-all`}
                >
                  <a
                    onClick={() => setMobileExpand("home")}
                    className="flex items-center justify-between pt-2 pb-2"
                    href="#"
                  >
                    Home
                    {mobileExand === "home" ? (
                      <IoIosArrowBack size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </a>
                  <ul className={`w-full`}>
                    <li className=" border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Home page 1
                      </a>
                    </li>
                    <li className=" border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Home page 2
                      </a>
                    </li>
                    <li className=" border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Home page 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep  ${
                    mobileExand === "pages" ? "max-h-[300px]" : "max-h-[41px]"
                  }  overflow-hidden duration-1000 ease-in-out`}
                >
                  <a
                    onClick={() => setMobileExpand("pages")}
                    className="flex items-center justify-between pt-2 pb-2"
                    href="#"
                  >
                    Pages
                    {mobileExand === "pages" ? (
                      <IoIosArrowBack size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </a>
                  <ul className={`w-full `}>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Pages page 1
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Pages page 2
                      </a>
                    </li>
                  </ul>
                </li>
                {/* aboutus */}
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep  ${
                    mobileExand === "blog" ? "max-h-[300px]" : "max-h-[41px]"
                  }  overflow-hidden duration-800 ease-in-out`}
                >
                  <a
                    onClick={() => setMobileExpand("blog")}
                    className="flex items-center justify-between pt-2 pb-2"
                    href="/aboutus"
                  >
                    About Us
                  </a>
                </li>
                {/* blog */}
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep  ${
                    mobileExand === "blog" ? "max-h-[1000px]" : "max-h-[41px]"
                  }  overflow-hidden duration-800 ease-in-out`}
                >
                  <a
                    onClick={() => setMobileExpand("blog")}
                    className="flex items-center justify-between pt-2 pb-2"
                    href="#"
                  >
                    Blog
                    {mobileExand === "blog" ? (
                      <IoIosArrowBack size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </a>
                  <ul className={`w-full `}>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Standard Blog
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Classic Blog
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                {/* shop */}
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep  ${
                    mobileExand === "shop" ? "max-h-[1000px]" : "max-h-[41px]"
                  }  overflow-hidden duration-800 ease-in-out`}
                >
                  <a
                    onClick={() => setMobileExpand("shop")}
                    className="flex items-center justify-between pt-2 pb-2"
                    href="#"
                  >
                    Shop
                    {mobileExand === "shop" ? (
                      <IoIosArrowBack size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </a>
                  <ul className={`w-full `}>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Shop Left Sidebar
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Shop Right Sidebar
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Shop Details
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Wishlist page
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Cart page
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Checkout page
                      </a>
                    </li>
                    <li className="border-t border-color-grey-deep">
                      <a className="block pt-2 pb-2 pl-3 " href="/">
                        Order completed
                      </a>
                    </li>
                  </ul>
                </li>
                {/* special */}
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep  ${
                    mobileExand === "blog" ? "max-h-[300px]" : "max-h-[41px]"
                  }  overflow-hidden duration-800 ease-in-out`}
                >
                  <a
                    className="flex items-center justify-between pt-2 pb-2"
                    href="/special"
                  >
                    Special
                  </a>
                </li>
                {/* contact us */}
                <li
                  className={`border-t bg-[#202020] border-color-grey-deep  ${
                    mobileExand === "contactus"
                      ? "max-h-[300px]"
                      : "max-h-[41px]"
                  }  overflow-hidden duration-800 ease-in-out`}
                >
                  <a
                    className="flex items-center justify-between pt-2 pb-2"
                    href="/contact-us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* close button */}
            <button
              onClick={() => setmobileop(false)}
              className="absolute top-3 right-3 z-50 text-white "
            >
              <AiOutlineClose
                className={`${
                  mobileop ? "rotate-90" : ""
                } duration-300 delay-300 ease-in-out`}
                size={30}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileManus;
