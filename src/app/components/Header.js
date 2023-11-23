"use client";
import React, { Fragment, useState, useEffect } from "react";
import Dropdown from "./Dropdown";

import {
  AiOutlineUser,
  AiOutlineFileProtect,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";

import Menus from "./header/Menus";
import HeaderCart from "./header/HeaderCart";

const Header = ({ active = "home", subactive = "home2" }) => {
  const [currencyop, setCurrencyop] = useState(false);
  const [sellwithop, setSellwithop] = useState(false);
  const [helpop, setHelpop] = useState(false);
  const [mobileop, setmobileop] = useState(false);

  //   on click listen
  useEffect(() => {
    const handleClick = () => {
      if (currencyop) {
        setCurrencyop(false);
      }
      if (sellwithop) {
        setSellwithop(false);
      }
      if (helpop) {
        setHelpop(false);
      }
    };

    // document.addEventListener("click", handleClick);

    // return () => {
    //   document.removeEventListener("click", handleClick);
    // };
  }, [currencyop, sellwithop]);
  return (
    <div className="w-full bg-color-primary transition-all duration-300">
      {/* header top */}
      <div className="bg-color-grey-light w-full p-2">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
            {/* header top left */}
            <div className="flex items-center text-color-grey-deep text-sm">
              {/* dropdown 01 */}
              <div className="flex items-center gap-2 right-border pr-3">
                <span className="text-sm text-color-grey-deep">Ship to</span>
                <div className="relative block">
                  <button
                    onClick={() => setCurrencyop(!currencyop)}
                    className="flex items-center drop-down after:ml-1"
                  >
                    <img
                      className="w-4 h-4 rounded-full mr-1"
                      src="/assets/icon/ship_flag.png"
                      alt=""
                    />
                    <span>US/USD</span>
                  </button>
                  <Dropdown
                    isFocused={currencyop}
                    data={[
                      {
                        id: 1,
                        element: (
                          <Fragment>
                            <img src="/assets/icon/australia.png" alt="" />
                            <p>AUS/USD</p>
                          </Fragment>
                        ),
                      },
                      {
                        id: 2,
                        element: (
                          <Fragment>
                            <img src="/assets/icon/bng.png" alt="" />
                            <p>BNG/TK</p>
                          </Fragment>
                        ),
                      },
                      {
                        id: 2,
                        element: (
                          <Fragment>
                            <img src="/assets/icon/india.png" alt="" />
                            <span>UK/GBP</span>
                          </Fragment>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              {/* dropdown 02 */}
              <div className="flex items-center gap-2 sm:right-border pl-3 pr-3">
                <span>Quick Quide</span>
                <div className="relative block">
                  <button
                    onClick={() => setHelpop(!helpop)}
                    className="drop-down after:ml-1"
                  >
                    Help
                  </button>
                  <Dropdown
                    isFocused={helpop}
                    data={[
                      {
                        id: 1,
                        element: (
                          <Fragment>
                            <a href="/help/returns">Returns</a>
                          </Fragment>
                        ),
                      },
                      {
                        id: 2,
                        element: (
                          <Fragment>
                            <a href="/help/privacy">Privacy</a>
                          </Fragment>
                        ),
                      },
                      {
                        id: 3,
                        element: (
                          <Fragment>
                            <a href="/help/terms">Terms</a>
                          </Fragment>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              {/* dropdown 03 */}
              <div className="hidden sm:block relative ">
                <button
                  onClick={() => setSellwithop(!sellwithop)}
                  className="drop-down pl-3 after:ml-1"
                >
                  Sell With Us
                </button>
                <Dropdown
                  isFocused={sellwithop}
                  data={[
                    {
                      id: 1,
                      element: (
                        <Fragment>
                          <a href="/administration/">Seller Login</a>
                        </Fragment>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            {/* header top right */}
            <div className="flex items-center text-color-grey-deep text-sm">
              <a
                href="/login/"
                className="flex items-center pr-3 right-border hover:text-color-secondary duration-300"
              >
                <AiOutlineUser className="text-color-secondary" size={15} />
                <span className="pl-1">Sign in</span>
              </a>
              <a
                href="/my-account/"
                className="pl-3 hover:text-color-secondary duration-300"
              >
                <span>My Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <===header top end===> */}

      {/* Header bottom */}
      <div
        id="header-middle"
        className="w-full pt-3 pb-3 bg-color-primary z-50"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <a href="/" className="hidden smd:block w-32 md:w-36 ">
              <img className="w-full" src="/assets/logo/logo-tech.png" alt="" />
            </a>
            {/* header bottom right */}
            <div className="flex flex-1 smd:flex-initial gap-5 items-center justify-between">
              {/* search bar */}
              <form className="flex flex-1 items-center p-1 bg-color-primary">
                <input
                  name="search"
                  className="p-2 pl-4 pr-4 border flex-1 smd:flex-initial border-color-grey-light rounded-l-full w-36 md:w-72 smd:w-96 outline-none text-[14px] focus:border-color-orange-deep"
                  type="text"
                  placeholder="Search for your item's type....."
                />
                <select
                  name="category"
                  className="hidden xsm:block w-36 sm:w-40 p-2 pl-4 pr-4 border border-l-0 border-r-0 border-color-grey-light outline-none text-[14px] bg-[url('/assets/icon/nw_selarw.png')] bg-no-repeat bg-scroll bg-right appearance-none"
                >
                  <option>All Categories</option>
                  <option>Women{`'`}s Clothing</option>
                  <option>Men{`'`}s Clothing</option>
                  <option>Computer &amp; Office</option>
                  <option>Consumer Electronics</option>
                  <option>Home &amp; Garden</option>
                  <option>Luggage &amp; Bags</option>
                  <option>Shoes</option>
                  <option>Mother &amp; Kids</option>
                  <option>Beauty &amp; Health</option>
                  <option>Home Appliances</option>
                  <option>Food</option>
                  <option>Underwear &amp; Sleepwear</option>
                  <option>In All Categories</option>
                </select>
                <button className="p-2 pl-4 pr-4 rounded-r-full bg-color-orange-deep text-white">
                  <BsSearch size={23} />
                </button>
              </form>
              {/* right buttons */}
              <div className="hidden lg:flex items-center gap-7 text-color-grey-deep">
                <div className="relative group/cart">
                  <a
                    href="/cart"
                    className="flex flex-col items-center cursor-pointer hover:text-color-orange-deep duration-300"
                  >
                    <div className="relative">
                      <BsHandbag size={22} />
                      <span className="flex flex-col justify-center p-[2px] min-w-[16px] max-w-[20px] h-4 rounded-full bg-color-orange-deep text-white absolute top-0 -right-[6px] text-[10px] text-center">
                        2
                      </span>
                    </div>
                    <p className="text-sm ">Cart</p>
                  </a>
                  {/* dropdown */}

                  <HeaderCart />
                </div>
                <a
                  href="/wishlist"
                  className="flex flex-col items-center cursor-pointer hover:text-color-orange-deep duration-300"
                >
                  <div className="relative">
                    <AiOutlineHeart size={22} />
                  </div>
                  <p className="text-sm ">Wishlist</p>
                </a>

                <a
                  href="/my-account/orders"
                  className="flex flex-col items-center cursor-pointer hover:text-color-orange-deep duration-300"
                >
                  <AiOutlineFileProtect size={22} />
                  <p className="text-sm ">Tracking</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <==== header buttom end====> */}

      {/* manu bar */}
      <Menus
        active={active}
        subactive={subactive}
        mobileop={mobileop}
        setmobileop={setmobileop}
      />
      {/* <===manu bar===> */}
    </div>
  );
};

export default Header;
