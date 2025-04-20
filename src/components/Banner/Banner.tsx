import Image from "next/image";
import React from "react";
import PrimaryButton from "../Others/PrimaryButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SecondaryButton from "../Others/SecondaryButton";

const Banner = () => {
  return (
    <div
      className="relative h-[90vh] mt-[65px]"
      style={{ backgroundImage: "url(/bg-img/banner-bg.webp)" }}
    >
      <Image
        src={"/bg-img/banner-bg.webp"}
        width={1600}
        height={1000}
        alt="Banner Image"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="absolute  w-full flex flex-col justify-center h-full items-center">
        <h1 className="text-6xl font-inria font-bold mb-5">
          Gear Up with the Best Tech
        </h1>
        <p className="text-base text-center">
          From smartphones to camera gear, find the latest gadgets in one click.
          <br />
          Trusted brands, sleek designs, and unbeatable prices await you.
        </p>
        <div className="relative flex gap-5 items-center mt-5">
          <SecondaryButton
            label="About Us"
            className="w-fit text-sm uppercase font-medium bg-white text-black border hover:text-white "
          />
          <p className="flex items-center gap-1 group">
            <Link href={""}>Get Started</Link>
            <ArrowRight
              size={17}
              className="group-hover:translate-x-1 transition-transform delay-300 "
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
