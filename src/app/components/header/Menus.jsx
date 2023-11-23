import React, { Fragment } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Submenu from "../Submenu";
import MobileManus from "./MobileManus";
import SubMenus from "./SubMenus";
import Image from "next/image";

// demy content
import { categorys } from "@/app/data";

const Menus = ({
  active = "",
  subactive = "",
  mobileop = false,
  setmobileop = () => {},
}) => {
  return (
    <div className="w-full bg-color-secondary bg-opacity-80 p-0">
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* nav category manu */}
          <div className="hidden smd:block group/cate gap-2  p-5 pl-8 pr-8 bg-color-secondary-deep bg-opacity-80 text-white cursor-pointer relative">
            <a href="#" className="flex items-center gap-2">
              <AiOutlineMenuUnfold className="text-white" size={20} />
              <h4 className="text-s14 text-white">ALL DEPARTMENT</h4>
              <IoIosArrowDown className="text-white" size={15} />
            </a>

            {/* overlay categorys */}
            {categorys.length > 0 ? (
              <div className="hidden group-hover/cate:block animate-fadeup-20 absolute pb-6 top-[61px] left-0  z-10 w-full h-auto">
                <div className="bg-white border border-color-grey-light relative">
                  <ul className="gap-2 pt-3">
                    {categorys.map((category, index) => {
                      return (
                        <li
                          key={index}
                          className="block w-full gap-2 pb-2 group/dm pl-3 pr-3"
                        >
                          <a href="#" className="flex gap-2 items-center">
                            <div className="border-2 rounded-full border-color-grey-light group-hover/dm:border-color-orange-deep p-[2px] duration-300">
                              <Image
                                alt=""
                                src={category.image}
                                width={40}
                                height={40}
                                className="bg-color-grey-light"
                                style={{ borderRadius: "100%" }}
                              />
                            </div>
                            <span className="text-sm text-color-grey-deep group-hover/dm:text-color-orange-deep duration-300">
                              {category.name}
                            </span>
                          </a>
                          {/* manu bars */}
                          {category.subCategorys.length > 0 ? (
                            <SubMenus subdata={category.subCategorys} />
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          {/* logo */}
          <a
            href="/"
            className="block smd:hidden max-w-[160px] min-w-[60px]  pt-5 pb-5"
          >
            <img
              className="w-full"
              src="/assets/logo/logo-tech-white.png"
              alt=""
            />
          </a>
          {/* mobile nav */}
          <button
            onClick={() => setmobileop(!mobileop)}
            className="p-1 text-white smd:hidden"
          >
            <AiOutlineMenu size={20} />
          </button>

          <MobileManus
            active={active}
            subactive={subactive}
            mobileop={mobileop}
            setmobileop={setmobileop}
          />

          {/* web nav */}
          <div className="hidden smd:flex justify-end">
            <ul className="flex flex-row flex-wrap p-0 m-0 duration-300">
              <li className="group flex flex-col relative list-none">
                <Link
                  className={`nav-btn ${
                    active === "home" ? "active" : "group-hover:active"
                  } text-[14px] `}
                  href="/"
                >
                  HOME
                </Link>
              </li>

              <li className="flex flex-col relative list-none duration-300 group">
                <Link
                  className={`nav-btn ${
                    active === "shop" ? "active" : "ho-active"
                  } text-[14px]`}
                  href="/"
                >
                  SHOP
                </Link>
                {/* sub page */}
                <Submenu
                  elements={[
                    <Fragment key={1}>
                      <Link
                        href="/home1"
                        className="font-bold block p-2 pl-7 pr-7 hover:bg-color-grey-deep-light"
                      >
                        Latest Products
                      </Link>
                    </Fragment>,
                    <div className="group/1 relative block" key={2}>
                      <Link
                        href="/home2"
                        className="relative font-bold block p-2 pl-7 pr-7 hover:bg-color-grey-deep-light"
                      >
                        Best Selling
                        <IoIosArrowDown
                          className={`group-hover/1:hidden inline`}
                          size={15}
                        />
                        <IoIosArrowBack
                          className={`hidden group-hover/1:inline`}
                          size={15}
                        />
                      </Link>
                      <Submenu
                        className="group-hover/1:block"
                        isRight={true}
                        elements={[
                          <Fragment key={3}>
                            <Link
                              href="/home1"
                              className="font-bold block p-2 pl-7 pr-7 hover:bg-color-grey-deep-light"
                            >
                              Lowest Price
                            </Link>
                          </Fragment>,
                          <Fragment key={4}>
                            <Link
                              href="/home1"
                              className="font-bold block p-2 pl-7 pr-7 hover:bg-color-grey-deep-light"
                            >
                              Free Shipping
                            </Link>
                          </Fragment>,
                        ]}
                      />
                    </div>,
                  ]}
                />
              </li>
              <li className="flex flex-col relative list-none duration-300">
                <Link
                  className={`nav-btn ${
                    active === "special" ? "active" : "ho-active"
                  } text-[14px]`}
                  href="/support"
                >
                  SUPPORT
                </Link>
              </li>
              <li className="group flex flex-col relative list-none duration-300">
                <Link
                  className={`nav-btn ${
                    active === "about" ? "active" : "ho-active"
                  } text-[14px]`}
                  href="/"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="flex flex-col relative list-none duration-300">
                <Link
                  className={`nav-btn ${
                    active === "special" ? "active" : "ho-active"
                  } text-[14px]`}
                  href="/"
                >
                  CONTACTS
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menus;
