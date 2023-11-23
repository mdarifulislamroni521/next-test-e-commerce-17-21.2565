import React from "react";

const ProductDescription = ({ htmlDescriptiopn }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlDescriptiopn }}
      class="animate-fadeup-20 w-full"
    ></div>
  );
};

export default ProductDescription;
