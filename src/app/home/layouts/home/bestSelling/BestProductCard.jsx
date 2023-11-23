import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Rating from "@/app/components/Rating";

const BestProductCard = ({ data = {} }) => {
  return (
    <motion.div
      key={data.id}
      className={`w-full shadow mb-2`}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="/product/123" className=" bg-white w-full block m-auto ">
        <Image
          alt=""
          src={data.urls[0]}
          width={400}
          height={500}
          style={{ width: "100%" }}
        />
        {/* bottom */}
        <div className="w-full p-2">
          {/* rating and regular pricing */}
          <div className="flex items-center justify-between">
            <Rating className="" size={15} avg={2.9} />
            <s className="text-[#949494] text-s14 font-[300]">
              $ {Number(data.regular).toFixed(2)}
            </s>
          </div>
          {/* pricing and title */}
          <div className="flex items-center justify-between pt-1">
            <h6 className="text-s14">{data.title}</h6>
            <span className="text-s14">${Number(data.price).toFixed(2)}</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default BestProductCard;
