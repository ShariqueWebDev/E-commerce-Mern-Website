import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1200px] w-full px-5 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
