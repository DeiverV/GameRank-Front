"use client";
import { useGetAllUsersQuery } from "@/src/store/services";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableColumnProps,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { UserDetailsToAdmin } from "@/src/store/models";
import { User } from "@nextui-org/user";
import Link from "next/link";
import { CustomPagination } from "@/src/components";
import { useSearchParams } from "next/navigation";
import { APP_ROUTES } from "@/src/config";
import { Button } from "@nextui-org/button";
import { BsEye } from "react-icons/bs";

interface Column extends Omit<TableColumnProps<any>, "children"> {
  label: string;
}

const columns: Column[] = [
  {
    key: "player",
    label: "Player",
    align: "start",
  },
  {
    key: "highestScore",
    label: "Highest Score",
    align: "center",
  },
  {
    key: "rank",
    label: "Rank",
    align: "center",
  },
  {
    key: "manage",
    label: "Manage",
    align: "center",
  },
];

export const AdminTable = () => {
  const searchParams = useSearchParams();

  const { data, isLoading } = useGetAllUsersQuery({
    limit: parseInt(searchParams.get("limit") ?? "10"),
    page: parseInt(searchParams.get("page") ?? "1"),
  });

  const renderCell = (item: UserDetailsToAdmin, columnKey: any) => {
    const columnValue = getKeyValue(item, columnKey);

    if (columnKey === "player") {
      return (
        <User
          name={item.name}
          description={item.email}
          avatarProps={{
            src: item.image,
            getInitials: (name) => name.charAt(0),
          }}
        />
      );
    }

    if (columnKey === "manage") {
      return (
        <Button
          size="sm"
          color="primary"
          className="w-fit"
          as={Link}
          href={APP_ROUTES.USERS.PROFILE.path.replace(
            ":username",
            item.username
          )}
          startContent={<BsEye size={18} />}
          isIconOnly
        />
      );
    }

    return columnValue;
  };

  return (
    <Table
      aria-label="Users Table"
      isCompact
      classNames={{
        th: "bg-gameRanks_secondary text-white",
        wrapper: "bg-gameRanks_primary shadow-none",
      }}
      bottomContent={<CustomPagination total={data?.totalCount ?? 0} />}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} align={column.align}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={
          data?.data.slice(0, parseInt(searchParams.get("limit") ?? "10")) ?? []
        }
        isLoading={isLoading}
      >
        {(item) => (
          <TableRow key={item.username}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
