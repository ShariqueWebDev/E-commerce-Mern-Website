import { Column, ColumnDef } from "@tanstack/react-table";
import TableHOC from "./TableHOC";

interface DataType {
  _id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: ColumnDef<DataType>[] = [
  {
    id: "_id", // Provide a unique id
    header: "Id",
    accessorKey: "_id", // Use accessorKey instead of accessor
  },
  {
    id: "quantity",
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    id: "discount",
    header: "Discount",
    accessorKey: "discount",
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};

export default DashboardTable;
