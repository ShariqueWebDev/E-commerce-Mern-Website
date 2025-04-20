'use client';
import { ReactElement, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Column } from "@tanstack/react-table";
import AdminSidebar from "../../../components/Admin/AdminSidebar";
import TableHOC from "../../../components/admin/TableHOC";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    id:"avatar",
    header: "Avatar",
    accessorKey: "avatar",
  },
  {
    id:"name",
    header: "Name",
    accessorKey: "name",
  },
  {
    id:"gender",
    header: "Gender",
    accessorKey: "gender",
  },
  {
    id:"email",
    header: "Email",
    accessorKey: "email",
  },
  {
    id:"role",
    header: "Role",
    accessorKey: "role",
  },
  {
    id:"action",
    header: "Action",
    accessorKey: "action",
  },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: Array<DataType> = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
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
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
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
  const [rows, setRows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Customers",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
    </div>
  );
};

export default Customers;
