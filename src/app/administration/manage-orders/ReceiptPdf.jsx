import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React from "react";
import { cartData } from "@/app/data";

const ReceiptPdf = ({ to = "customer" }) => {
  const product = cartData?.productItems[0];
  return (
    <div className="h-screen w-full bg-white p-8 ">
      <div className="w-full flex-1 flex flex-col justify-end items-end">
        <p className="pb-10">
          https://techobd.com/my-account/orders at 10 December 2023 10:33 PM
        </p>
      </div>
      <div className=" m-auto">
        <h1 className="text-lg text-black">Techobd - Online Shopping</h1>
        <p className="text-sm italic">132, My Street, Bigtown BG23 4YZ</p>
        <div className="w-full pt-5">
          <h3 className="text-center text-black text-lg">
            {to === "customer" ? "Customer Coppy" : "Manager Coppy"}
          </h3>
        </div>
        <div className="pt-10 w-full">
          <div className="grid grid-cols-4 gap-3">
            <div className="w-full">
              <h3 className="text-xl text-black">BILL To:</h3>
              <h6 className="text-base text-black ">@ username</h6>
              <h6 className="text-base text-black">MD Ariful Islam Roni</h6>
              <p className="text-sm">132, My Street, Bigtown BG23 4YZ</p>
            </div>
            <div className="w-full">
              <h3 className="text-xl text-black">SHIPT TO:</h3>
              <h6 className="text-base text-black">MD Ariful Islam Roni</h6>
              <p className="text-sm">132, My Street, Bigtown BG23 4YZ</p>
              <h6>📞 0185546545644</h6>
            </div>
            <div className="w-full">
              <h3 className="text-xl text-black">RECEIPT INFO:</h3>
              <h6 className="text-base text-black">Receipt ID:</h6>
              <h6 className="text-base text-black">Date:</h6>
              <h6 className="text-base text-black">Due Date:</h6>
            </div>
            <div className="w-full">
              <h3 className="text-xl text-black">#</h3>
              <h6 className="text-base text-black">12457-845545-95445</h6>
              <h6 className="text-base text-black ">10-12-2023 10:33 PM</h6>
              <h6 className="text-base text-black ">13-12-2023 10:33 PM</h6>
            </div>
          </div>
          {/* order info  */}
          <div className="w-full pt-10">
            <table className="w-full border-collapse cart-table">
              <thead>
                <tr key="head">
                  <th className="text-s14 font-extrabold p-3">PRODUCT</th>
                  <th className="text-s14 font-extrabold p-3">PRICE</th>
                  <th className="text-s14 font-extrabold p-3">QUANTITY</th>
                  <th className="text-s14 font-extrabold p-3">SUBTOTAL</th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                <tr className="pt-1 pb-2">
                  <td>
                    <div class="flex items-center min-w-max">
                      <div className="flex items-center pr-2">
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
                        <p className="text-s13">
                          Cramond Leopard &amp; Pythong Anorak
                        </p>
                        <span className="italic text-sm">
                          No Coupon applyed
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-s14 text-center">
                    $ {Number(product.price).toFixed(2)}
                  </td>
                  <td class="w-32">
                    <div className="flex items-center justify-center">
                      {product.quentity}
                    </div>
                  </td>
                  <td class="text-s14 text-center">
                    <span>
                      $ {Number(product.quentity * product.price).toFixed(2)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    Total: $
                    {Number(product.quentity * product.price).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* manager review */}
          <div className="w-full flex flex-col justify-end items-end pt-16">
            <div className="w-max p-2">
              <h3 className="text-base text-black">MR. Smart Khan</h3>
              <p className="text-sm text-black italic">manager</p>
              <img
                className="w-32 h-auto -rotate-[20deg] -mt-10"
                src={"/signature.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPdf;
