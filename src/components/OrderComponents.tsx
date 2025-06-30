"use client";
import { ColumnDef } from "@tanstack/react-table";
import React, { ReactElement } from "react";
import TableHOC from "./Admin/TableHOC";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount?: number; // ✅ Optional field
  status: string;
  action: string;
};

const columns: ColumnDef<DataType>[] = [
  { header: "ID", accessorKey: "_id" },
  { header: "Quantity", accessorKey: "quantity" },
  { header: "Discount", accessorFn: (row: any) => row.discount || 0 },
  { header: "Amount", accessorKey: "amount" },
  { header: "Status", accessorKey: "status", enableSorting: false },
  { header: "Action", accessorKey: "action", enableSorting: false },
];

const sampleData: DataType[] = [
  {
    _id: "1",
    amount: 100,
    quantity: 2,
    discount: 10,
    status: "Pending",
    action: "Edit",
  },
  {
    _id: "2",
    amount: 200,
    quantity: 1,
    discount: 20,
    status: "Pending",
    action: "Edit",
  },
];

const OrderComponents = () => {
  const Table = TableHOC<DataType>(
    columns,
    sampleData.length > 0 ? sampleData : [],
    "dashboar-product-box",
    "Order",
    true
  );
  return <div className="lg:mt-40 mt-16 lg:px-20 px-4 ">{Table()}</div>;
};

export default OrderComponents;
