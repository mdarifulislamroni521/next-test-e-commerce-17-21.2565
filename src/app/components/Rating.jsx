import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
const Rating = ({ avg = 0.0, size = 20 }) => {
  return (
    <div className="flex items-center gap-[2px] text-color-orange-deep">
      {/* first start */}
      {avg >= 0.5 && avg < 1 ? (
        <FaStarHalfAlt size={size} />
      ) : avg >= 1 ? (
        <FaStar size={size} />
      ) : (
        <FaRegStar size={size} />
      )}
      {avg >= 1.5 && avg < 2 ? (
        <FaStarHalfAlt size={size} />
      ) : avg >= 2 ? (
        <FaStar size={size} />
      ) : (
        <FaRegStar size={size} />
      )}
      {avg >= 2.5 && avg < 3 ? (
        <FaStarHalfAlt size={size} />
      ) : avg >= 3 ? (
        <FaStar size={size} />
      ) : (
        <FaRegStar size={size} />
      )}
      {avg >= 3.5 && avg < 4 ? (
        <FaStarHalfAlt size={size} />
      ) : avg >= 4 ? (
        <FaStar size={size} />
      ) : (
        <FaRegStar size={size} />
      )}
      {avg >= 4.5 && avg < 5 ? (
        <FaStarHalfAlt size={size} />
      ) : avg >= 5 ? (
        <FaStar size={size} />
      ) : (
        <FaRegStar size={size} />
      )}
    </div>
  );
};

export default Rating;
