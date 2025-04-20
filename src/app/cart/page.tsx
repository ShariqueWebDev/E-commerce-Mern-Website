import React from "react";
import dynamic from "next/dynamic";

const LazyLoadingComponent = dynamic(
  () => import("../../components/LazyLoading/LazyLoading"),
  {
    loading: () => <p>Component Loading Please Wait...</p>,
  }
);

// const LazyLoadingComponent = dynamic(
//     async () => {
//       await new Promise((resolve) => setTimeout(resolve, 3000)); // Delay of 3 seconds
//       return import("../../components/LazyLoading/LazyLoading");
//     },
//     {
//       loading: () => <p>Component Loading Please Wait...</p>,
//     }
//   );

const Cartpage = () => {
  return (
    <>
      <LazyLoadingComponent />
    </>
  );
};

export default Cartpage;
