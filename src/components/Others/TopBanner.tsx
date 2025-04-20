import Image from "next/image";
import React from "react";

const TopBanner = ({
  className,
  title,
  path,
  backgroundImagePath,
}: {
  className: string;
  title: string;
  path: string | string[];
  backgroundImagePath: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-0 inset-0 bg-black/50 w-full h-[270px]">
        <Image
          width={1600}
          height={700}
          alt={title + " " + "image"}
          className="w-full h-full object-cover object-center"
          src={backgroundImagePath || "/fallback.webp"}
        />
      </div>
      <div className="">
        <h3 className="">{title}</h3>
        <h4 className="">{path}</h4>
      </div>
    </div>
  );
};

export default TopBanner;
