"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Others/Wrapper";
import { Tag } from "lucide-react";
import { MdErrorOutline } from "react-icons/md";
import CartItemcard from "./CartItemcard";
import Link from "next/link";
import Image from "next/image";

export type CartItemProps = {
  product_id: string;
  title: string;

  description: string;
  imgPath: string;
  price: number;
  mrp_price: number;
  sold_by: string;
  size: string[]; // You can change to number[] if sizes are numeric
  quantity: string[]; // Same here; use number[] if these are numbers
  stock: number;
};

const cartItems: CartItemProps[] = [
  {
    product_id: "proh123s52",
    title: "Bolt Headphones 3.5 Bluetooth Technology",
    description: ` Headphones 3.5 with Bluetooth Technology offer both wired and
    wireless listening options. Enjoy powerful sound, clear calls,
    and all-day comfort. Seamlessly switch between devices with dual
    connectivity for ultimate convenience.`,
    imgPath: "/dummy-images/product-3.webp",
    price: 680,
    mrp_price: 1200,
    sold_by: "Truenet Commerce",
    size: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    quantity: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);
  const [couponPopup, setCouponPopup] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  // const handleCopy = async () => {
  //   try {
  //     await navigator.clipboard.writeText(couponCode);
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  //   } catch (err) {
  //     console.error("Failed to copy!", err);
  //   }
  // };

  console.log(couponCode);

  return (
    <Wrapper>
      <div className="mt-20 ">
        <div className="flex items-center gap-2 text-xs justify-center font-semibold mb-10">
          <div className="">BAG</div>
          <div className="">------</div>
          <div className="">ADDRESS</div>
          <div className="">------</div>
          <div className="">PAYMENT</div>
        </div>
        <div className="flex gap-3 ">
          <div className="w-[70%]">
            {cartItems?.length > 0 ? (
              cartItems?.map((item: CartItemProps, index) => {
                return <CartItemcard item={item} key={index} />;
              })
            ) : (
              <div className="flex justify-center items-center flex-col gap-3 ">
                <div className="max-w-[300px] w-full ">
                  <Image
                    src={"/emptycart.webp"}
                    width={600}
                    height={600}
                    alt="empty card"
                  />
                </div>
                <p className="font-semibold text-sm">
                  Your cart is empty. Time to fill it with awesome stuff!
                </p>
              </div>
            )}
          </div>
          <div className="w-[30%] p-5 border  h-full">
            <div className="">
              {/* <p className="uppercase text-xs font-semibold mb-2">Coupons</p> */}
              <div className="flex flex-col gap-3 text-xs uppercase font-medium ">
                <div className="flex items-center gap-2">
                  <div className="">
                    <Tag size={18} />
                  </div>
                  <p className="">Apply Coupons</p>

                  {/* COUPON POPUP */}
                  {/* <div
                    className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
                      couponPopup
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    Overlay
                    <div
                      className="absolute inset-0 bg-black/50"
                      onClick={() => setCouponPopup(false)}
                    ></div>

                    Popup Modal
                    <div className="relative bg-white max-w-[500px] w-full p-5 rounded shadow-lg z-10">
                      <div
                        className="absolute top-3 right-3 cursor-pointer"
                        onClick={() => setCouponPopup(false)}
                      >
                        <X size={18} />
                      </div>
                      <h3 className="uppercase font-bold text-gray-500 px-5 pt-5">
                        Apply Coupon
                      </h3>
                      <hr className="my-5 bg-gray-300" />
                      <div className="p-5 pt-2 flex flex-col items-center">
                        <input
                          type="text"
                          className="border py-2 w-full px-3 mb-5"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button
                          disabled={couponCode === ""}
                          className={`bg-red-600 w-full text-white py-2 text-sm font-semibold`}
                        >
                          APPLY
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Coupon Code"
                  className="border p-1"
                />
                {couponCode &&
                  (isValidCouponCode ? (
                    <div>
                      <span className="">Get discount</span>
                      <span className="">
                        {discount} off using the <code>{couponCode}</code>
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-1 text-red-500 items-center">
                      <span>Invalid Code</span>
                      <span>
                        <MdErrorOutline />
                      </span>
                    </div>
                  ))}
                <div className="">
                  <button
                    className="uppercase border px-3 py-1 border-orange-600 text-orange-600"
                    onClick={() => {
                      setCouponPopup(true);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* COUPON CODE SECTION */}
              {/* <div className="mt-5">
                {couponCode &&
                  (isValidCouponCode ? (
                    <div className="flex justify-between gap-5">
                      <span className="uppercase text-xs font-semibold ">
                        {"Get discount "}
                      </span>{" "}
                      <div className="flex flex-col">
                        <span className="border flex justify-center gap-3 items-center font-bold py-1 px-3 relative mb-0.5">
                          {couponCode}
                          <span
                            className="cursor-pointer"
                            title="Copy coupon code"
                            onClick={handleCopy}
                          >
                            {copied ? (
                              <Check size={12} className="text-green-500" />
                            ) : (
                              <Clipboard size={12} />
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-1 text-red-500 items-center">
                      <span>Invalid Code</span>
                      <span>
                        <MdErrorOutline />
                      </span>
                    </div>
                  ))}
                <span className="text-xs">
                  Get discount using above coupon code!
                </span>
              </div> */}
              <hr className=" mt-3" />
              <div className="">
                <h4 className="uppercase text-xs font-semibold my-2">
                  Price Details (2 items)
                </h4>
                <div className="flex justify-between items-center uppercase text-xs font-semibold my-2">
                  <p className="">Total MRP</p>
                  <p className="">₹53,096</p>
                </div>
                {/* <div className="flex justify-between items-center uppercase text-xs font-semibold my-2">
                  <p className="">Coupon Discount</p>
                  <p className="">Apply Coupon</p>
                </div> */}
                <div className="flex justify-between items-center uppercase text-xs font-semibold mt-2 mb-0 ">
                  <p className="">Shipping Fee</p>
                  <p className="text-green-500">FREE</p>
                </div>
                <div className=" text-xs text-gray-500  mb-2">
                  Free shipping for you
                </div>
                <hr />
                <div className="flex justify-between items-center uppercase text-xs font-semibold my-2">
                  <p className="">Total Amount</p>
                  <p className="">₹53,096</p>
                </div>
                {cartItems?.length > 0 && (
                  <Link href={"/shipping"} className="">
                    <button className="bg-red-600 w-full py-1.5 mt-1 text-white text-sm">
                      Place order
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
