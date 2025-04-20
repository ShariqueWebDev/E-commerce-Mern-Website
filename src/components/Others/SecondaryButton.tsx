import React from "react";

const SecondaryButton = ({
  className,
  label,
}: {
  className?: string;
  label: string;
}) => {
  return (
    <div
      className={`${className} px-7 py-2 bg-gray-800 hover:bg-black cursor-pointer text-white rounded-sm`}
    >
      {label}
    </div>
  );
};

export default SecondaryButton;
