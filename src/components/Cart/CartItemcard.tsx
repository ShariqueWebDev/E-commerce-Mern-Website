import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CartItemProps } from "./Cart";
import { formatePrice } from "@/utils/side_utils";
import Link from "next/link";

type CartItemcardProps = {
  item: CartItemProps;
};

const CartItemcard: React.FC<CartItemcardProps> = ({ item }) => {
  return (
    <div>
      <Link
        href={`/product/${item?.product_id}`}
        className="border relative p-5 flex gap-5 "
      >
        <div className="absolute right-3 top-3">
          <X size={18} />
        </div>
        <div className="">
          <div className="w-28 border h-36">
            <Image
              src={item?.imgPath}
              width={400}
              height={500}
              alt=""
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-medium"> {item?.title} </h1>
          <p className="line-clamp-1 text-sm">{item?.description} </p>
          <p className="text-[11px] mt-1 text-gray-500">
            Sold by: {item?.sold_by}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 ">
              <p className="text-xs mt-2 font-medium">Size:</p>
              <select name="" id="" className="text-xs border mt-2">
                {item?.size?.map((num: string, index: number) => {
                  return <option value={num}>{num}</option>;
                })}
              </select>
            </div>
            <div className="flex items-center gap-1 ">
              <p className="text-xs mt-2 font-medium">Qty:</p>
              <select name="" id="" className="text-xs border mt-2">
                {item?.quantity?.map((qtn: string, index: number) => {
                  return <option value={qtn}>{qtn}</option>;
                })}
              </select>
            </div>
            <p className="text-orange-700 border text-xs font-semibold mt-2 px-1">
              3 left
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3 font-semibold text-sm ">
            <p className="">{formatePrice(item?.price, "INR")}</p>
            <p className="text-gray-400">₹ {item?.mrp_price}</p>
            <div className="flex items-center gap-1">
              <p className="text-green-500 line-through">₹ 2419</p>
              <span className="text-green-500">OFF</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartItemcard;
