"use client";
import React from "react";
import { useEffect } from "react";

const Overlay = ({ children }) => {
  return (
    <div className="relative h-0 w-full ">
      <div className="backfource-hidden fixed bg-black bg-opacity-30 top-0 w-full h-screen z-50 inset-0  overflow-y-scroll scroll-bar-none">
        <div className="relative w-full h-full pt-1 pb-1">{children}</div>
      </div>
    </div>
  );
};

export default Overlay;
