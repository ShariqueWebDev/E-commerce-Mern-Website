"use client";

import { JSX, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ColumnDef } from "@tanstack/react-table";
import AdminSidebar from "../Admin/AdminSidebar";
import TableHOC from "../Admin/TableHOC";

interface DataType {
  avatar: React.ReactNode;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: JSX.Element;
}

const columns: ColumnDef<DataType>[] = [
  { id: "avatar", header: "Avatar", accessorKey: "avatar" },
  { id: "name", header: "Name", accessorKey: "name" },
  { id: "gender", header: "Gender", accessorKey: "gender" },
  { id: "email", header: "Email", accessorKey: "email" },
  { id: "role", header: "Role", accessorKey: "role" },
  { id: "action", header: "Action", accessorKey: "action" },
];

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{ borderRadius: "50%" }}
        src="https://randomuser.me/api/portraits/women/54.jpg"
        alt="User"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{ borderRadius: "50%" }}
        src="https://randomuser.me/api/portraits/women/50.jpg"
        alt="User"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [rows] = useState<DataType[]>(arr);

  const CustomersTable = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Customers",
    true // <- optional showPagination
  );
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <CustomersTable />
      </main>
    </div>
  );
};

export default Customers;
