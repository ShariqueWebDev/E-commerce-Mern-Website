import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="max-w-[300px] w-full rounded-sm overflow-hidden group border">
      <div className="flex h-[200px]">
        <Image
          src={"/dummy-images/product-3.webp"}
          width={600}
          height={400}
          alt=""
          className="w-full h-full object-contain object-center group-hover:-translate-x-full transform transition-transform duration-300 "
        />
        <Image
          src={"/dummy-images/product-1.webp"}
          width={600}
          height={400}
          alt=""
          className="w-full h-full object-cover object-center group-hover:-translate-x-full translate-x-full transform transition-transform duration-300"
        />
      </div>
      <div className="p-4 pt-3 ">
        <h1 className="font-semibold">
          Bolt Headphones 3.5 Bluetooth Technology
        </h1>
        <p className="line-clamp-2 text-sm mt-1 text-gray-600">
          Headphones 3.5 with Bluetooth Technology offer both wired and wireless
          listening options. Enjoy powerful sound, clear calls, and all-day
          comfort. Seamlessly switch between devices with dual connectivity for
          ultimate convenience.
        </p>
        <div className="flex justify-between mt-2">
          <div className="flex gap-3">
            <h3 className="font-semibold text-lg">&#8377; 1950</h3>
            <h3 className="line-through text-gray-500">&#8377; 2150</h3>
          </div>
          <h3 className="text-green-600 font-medium">9.30% OFF</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
