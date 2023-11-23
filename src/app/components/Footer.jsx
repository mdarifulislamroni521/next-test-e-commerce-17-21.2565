"use client";
import React from "react";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoPinterestAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdOutlineFax, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="footer-content"
      className="w-full pt-10 pb-10 bg-color-grey-light z-20"
    >
      <div className="container flex items-center flex-wrap gap-5 md:justify-between">
        {/* first grid */}
        <div className=" pb-5">
          <Image
            src={`/assets/logo/logo-tech.png`}
            width={150}
            height={120}
            style={{ maxWidth: 150, height: "auto" }}
            alt=""
          />
          <p className="pt-5 pb-5 text-s14 text-color-grey-deep max-w-[320px]">
            Namkand sodales vel online best prices Amazon Check out ethnic wear,
            formal wear western wear Blood Pressure Rate Monito.
          </p>
          <div className="flex items-center gap-3">
            <a
              className="inline-block p-1 text-black rounded-full hover:bg-color-grey-light duration-300"
              target="_blank"
              href="https://facebook.com"
            >
              <BiLogoFacebook size={20} />
            </a>
            <a
              className="inline-block p-1 text-black rounded-full hover:bg-color-grey-light duration-300"
              target="_blank"
              href="https://instagram.com"
            >
              <BiLogoInstagram size={20} />
            </a>
            <a
              className="inline-block p-1 text-black rounded-full hover:bg-color-grey-light duration-300"
              target="_blank"
              href="https://twitter.com"
            >
              <BiLogoTwitter size={20} />
            </a>
            <a
              className="inline-block p-1 text-black rounded-full hover:bg-color-grey-light duration-300"
              target="_blank"
              href="https://pinterest.com"
            >
              <BiLogoPinterestAlt size={20} />
            </a>
            <a
              className="inline-block p-1 text-black rounded-full hover:bg-color-grey-light duration-300"
              target="_blank"
              href="https://linkedin.com"
            >
              <BiLogoLinkedin size={20} />
            </a>
          </div>
        </div>
        {/* second grid */}
        <div className=" max-w-[200px] pb-5">
          <h6 className="pb-7 text-black text-s16">CUSTOMER SERVICE</h6>
          <div className="flex flex-col gap-2">
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Help Center
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Returns
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Product Recalls
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Accessibility
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* 3rd grid */}
        <div className="max-w-[200px] pb-5">
          <h6 className="pb-7 text-black text-s16">QUICK LINKS</h6>
          <div className="flex flex-col gap-2">
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Return Policy
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Terms Of Use
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Security
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Privacy
            </a>
            <a
              className="text-s14 text-black hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              Store Pickup
            </a>
          </div>
        </div>
        {/* 4th grid */}
        <div className="max-w-[300px] pb-5">
          <h6 className="pb-7 text-black text-s16">CONTACT INFO </h6>
          <div className="flex flex-col gap-2 text-color-grey-deep">
            <a
              className="text-s14 text-black flex items-center gap-1 hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              <MdLocationOn size={30} />
              W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
            </a>
            <a
              className="text-s14 text-black flex items-center gap-1 hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              <IoMdCall size={20} />
              458-965-3224
            </a>
            <a
              className="text-s14 text-black flex items-center gap-1 hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              <MdEmail size={20} />
              Support@info.Com
            </a>
            <a
              className="text-s14 text-black flex items-center gap-1 hover:text-color-orange-deep duration-300"
              href="/customer-service"
              target="_blank"
            >
              <MdOutlineFax size={20} />
              458-965-3224
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
