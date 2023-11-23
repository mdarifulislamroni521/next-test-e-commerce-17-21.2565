import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartProductItem = ({ product = {}, cart = {}, setCart = () => {} }) => {
  const [quentity, setQuentity] = useState(1);

  const updateTotal = (id) => {
    let total = 0;
    const productItems = [];
    for (let pItem of cart.productItems) {
      if (pItem.id === id) {
        total = total + pItem.price * quentity;
        productItems.push({ ...pItem, quentity });
      } else {
        total = total + pItem.price * pItem.quentity;
        productItems.push(pItem);
      }
    }
    setCart({
      ...cart,
      total,
      productItems,
    });
  };
  const updateQuentity = (updateType, productId) => {
    if (updateType === "plus" && quentity < 10) {
      setQuentity(quentity + 1);
      updateTotal(productId);
    } else if (updateType === "minus" && quentity > 1) {
      setQuentity(quentity - 1);
      updateTotal(productId);
    }
  };
  return (
    <tr className="pt-1 pb-2">
      <td>
        <div class="flex items-center min-w-max">
          <div className="flex items-center pr-2">
            <button className="mr-2 text-black hover:text-color-orange-deep duration-300">
              <AiOutlineCloseCircle size={15} />
            </button>
            <a href="/product/123">
              <Image
                src={product.picture}
                width={100}
                height={100}
                style={{
                  width: 100,
                  height: "auto",
                  maxHeight: 130,
                  overflow: "hidden",
                }}
                alt=""
              />
            </a>
          </div>
          <div>
            <h4>
              <a
                className="text-s14 hover:text-color-orange-deep duration-300"
                href="/product/123"
              >
                Woman Lathers Jacket
              </a>
            </h4>
            <p className="text-s13">Cramond Leopard &amp; Pythong Anorak</p>
            <span className="italic text-sm">No Coupon applyed</span>
          </div>
        </div>
      </td>
      <td class="text-s14 text-center">$ {Number(product.price).toFixed(2)}</td>
      <td class="w-32">
        <div class="w-max m-auto">
          <div class="flex gap-2 justify-center items-center">
            <button
              onClick={() => updateQuentity("minus", product.id)}
              class="p-1 bg-color-grey-deep-light rounded-full w-6 h-6 flex flex-col justify-center items-center"
            >
              -
            </button>
            <span className="text-black text-s14">{quentity}</span>
            <button
              onClick={() => updateQuentity("plus", product.id)}
              class="p-1 bg-color-grey-deep-light rounded-full w-6 h-6 flex flex-col justify-center items-center"
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td class="text-s14 text-center">
        <span>$ {Number(product.quentity * product.price).toFixed(2)}</span>
      </td>
    </tr>
  );
};

export default CartProductItem;
