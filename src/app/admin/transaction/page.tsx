'use client';
import { ReactElement, useState } from "react";
// import { Link } from "react-router-dom";
import { Column } from "@tanstack/react-table";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import TableHOC from "../../../components/admin/TableHOC";
import Link from "next/link";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const arr: Array<DataType> = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    status: <span className="red">Processing</span>,
    quantity: 3,
    action: <Link href="/admin/transaction/sajknaskd">Manage</Link>,
  },

  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link href="/admin/transaction/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link href="/admin/transaction/sajknaskd">Manage</Link>,
  },
];

const columns: Column<DataType>[] = [
  {
    id: "user",
    header: "Avatar",
    accessorKey: "user",
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
  },
  {
    id: "discount",
    header: "Discount",
    accessorKey: "discount",
  },
  {
    id: "quantity",
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
  },
  {
    id: "action",
    header: "Action",
    accessorKey: "action",
  },
];

const Transaction = () => {
  const [rows, setRows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Transactions",
    rows.length > 6
  )();
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
    </div>
  );
};

export default Transaction;
