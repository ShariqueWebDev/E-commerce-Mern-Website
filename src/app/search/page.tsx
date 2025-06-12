import React from "react";
import dynamic from "next/dynamic";

const LazyLoadingComponent = dynamic(
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return import("../../components/Search/SearchComponent");
  },
  {
    loading: () => <p className="text-font-bold">Loading...</p>,
  }
);

const SearchPage = () => {
  return (
    <div className="pb-20 mt-16 ">
      <LazyLoadingComponent />
      {/* <SearchComponent /> */}
    </div>
  );
};

export default SearchPage;
