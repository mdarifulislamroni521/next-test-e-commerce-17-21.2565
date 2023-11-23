import React from "react";

import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  return (
    <div className={`w-full bg-color-primary min-h-[300px]`}>
      <div className="container">
        <div className="pt-24 pb-24">
          <div className="bg-[#F2F0ED] min-w-[200px] w-full md1k:w-1/2 md:w-2/3 m-auto p-2">
            <h1 className="p-3 pt-5 text-center text-3xl text-black font-extrabold">
              Log In
            </h1>
            {/* custom login */}
            <div className="w-full p-5 pl-10 pr-10">
              <form className="w-full">
                {/* username or email */}
                <div className="w-full">
                  <label className="text-sm block pb-1 text-color-grey-deep">
                    Username or email address
                  </label>
                  <input
                    className={`p-2 pl-3 pr-3 bg-color-grey-deep-light w-full rounded text-s13
                    border border-color-grey-light focus:outline-none focus:border-color-grey-deep`}
                    placeholder=""
                    type="text"
                  />
                </div>
                {/* password */}
                <div className="w-full pt-3">
                  <label className="text-sm block pb-1 text-color-grey-deep">
                    Password
                  </label>
                  <input
                    className={`p-2 pl-3 pr-3 bg-color-grey-deep-light w-full rounded text-s13
                    border border-color-grey-light focus:outline-none focus:border-color-grey-deep`}
                    placeholder=""
                    type="password"
                  />
                </div>
                <div className="flex items-center pt-2">
                  <p className="text-s11">
                    Haven{"'"}t any account?{" "}
                    <a
                      className="text-color-secondary hover:text-color-orange-deep text-sm duration-300"
                      href="/registration"
                    >
                      Register
                    </a>
                  </p>
                </div>
                <button className="p-3 w-2/6 mt-5 rounded-full text-sm block m-auto bg-color-orange-deep text-white hover:bg-opacity-90 ">
                  Login
                </button>
              </form>
            </div>
            {/* social login */}
            <div className="flex flex-wrap pt-1 pb-5 gap-3 items-center justify-center m-auto border-t border-dashed">
              <div className="flex bg-color-secondary p-2 rounded hover:bg-opacity-90 items-center gap-1 text-white font-bold cursor-pointer mt-3 mb-3">
                <BiLogoFacebook size={15} />
                <span className="text-sm">Login with facebook</span>
              </div>
              <div className="flex bg-white shadow p-2 rounded hover:bg-opacity-70 items-center gap-1 text-black font-bold cursor-pointer mt-3 mb-3">
                <FcGoogle size={15} />
                <span className="text-sm">Login with Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
