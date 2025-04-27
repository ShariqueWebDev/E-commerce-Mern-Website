import Image from "next/image";
import React from "react";

type ProductCardProps = {
  productId: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  productId,
  image,
  name,
  price,
  stock,
  handler,
}: ProductCardProps) => {
  const server = "10ef56ss250f0wem8f";
  return (
    <div className=" ">
      <div className="max-w-[300px] w-full rounded-sm overflow-hidden group border z-10 relative">
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
        <div className="px-4 pb-8 pt-3 ">
          <h1 className="font-semibold">
            Bolt Headphones 3.5 Bluetooth Technology
          </h1>
          <p className="line-clamp-2 text-sm mt-1 text-gray-600">
            Headphones 3.5 with Bluetooth Technology offer both wired and
            wireless listening options. Enjoy powerful sound, clear calls, and
            all-day comfort. Seamlessly switch between devices with dual
            connectivity for ultimate convenience.
          </p>
          <div className="flex justify-between mt-2">
            <div className="flex gap-3">
              <h3 className="font-semibold text-lg">&#8377; 1950</h3>
              <h3 className="line-through text-gray-500">&#8377; 2150</h3>
            </div>
            <h3 className="text-green-600 font-medium">9.30% OFF</h3>
          </div>
        </div>
        <div className="absolute bottom-0 bg-gray-900 text-white font-semibold text-center rounded-[3px] w-full py-1 text-sm border group-hover:translate-y-0 translate-y-3 opacity-0 group-hover:opacity-100 transition-transform duration-300 cursor-pointer">
          Add to Card
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
