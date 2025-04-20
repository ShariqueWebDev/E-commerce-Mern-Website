import dynamic from "next/dynamic";
import React from "react";

const DashBoardComp = dynamic(
  () => import("../../../components/Admin/DashboardComp"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const DashboardPage = () => {
  return (
    <div>
      <DashBoardComp />
    </div>
  );
};

export default DashboardPage;
