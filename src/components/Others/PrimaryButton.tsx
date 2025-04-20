import React from "react";

const PrimaryButton = ({
  className,
  label,
}: {
  className?: string;
  label: string;
}) => {
  return (
    <div className={`${className} px-7 py-2 border rounded-sm`}>{label}</div>
  );
};

export default PrimaryButton;
