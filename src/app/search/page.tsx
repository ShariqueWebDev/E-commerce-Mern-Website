import React from "react";
import dynamic from "next/dynamic";

const LazyLoadingComponent = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return import("../../components/LazyLoading/LazyLoading");
  },
  {
    loading: () => <p>Loading...</p>,
  }
);

const SearchPage = () => {
  return (
    <div>
      <LazyLoadingComponent />
    </div>
  );
};

export default SearchPage;
