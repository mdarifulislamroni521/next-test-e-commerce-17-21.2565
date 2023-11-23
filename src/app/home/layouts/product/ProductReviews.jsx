import React from "react";

const ProductReviews = ({ productRevires }) => {
  return (
    <div className="w-full">
      <div className="container">
        <h1 className="w-full pt-10 pb-2 text-black border-b border-color-grey-deep">
          Product Reviews
        </h1>
        <p className="pt-7 pb-5 text-black text-lg font-extrabold">
          {productRevires?.total ? productRevires.total : 0} review for Pouch
          Pocket Jacket
        </p>
      </div>
    </div>
  );
};

export default ProductReviews;
