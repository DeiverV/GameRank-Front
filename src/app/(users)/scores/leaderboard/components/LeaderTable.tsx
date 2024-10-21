"use client";
import { useEffect } from "react";
import { useGetLeaderboardQuery } from "@/src/store/services";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { LeaderboardPlayer } from "@/src/store/models";
import { User } from "@nextui-org/user";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTopLeaderboardUsers } from "@/src/store/slices";
import { CustomPagination } from "@/src/components";
import { useSearchParams } from "next/navigation";

const columns = [
  {
    key: "player",
    label: "Player",
  },
  {
    key: "highestScore",
    label: "Highest Score",
  },
  {
    key: "game",
    label: "Game",
  },
];

export const LeaderTable = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const { data, isLoading, isSuccess } = useGetLeaderboardQuery({
    game: "Tetris",
    limit: parseInt(searchParams.get("limit") ?? "10"),
    page: parseInt(searchParams.get("page") ?? "1"),
  });

  useEffect(() => {
    if (isLoading) return;
    if (isSuccess) {
      dispatch(setTopLeaderboardUsers(data?.data.slice(0, 3) ?? []));
    }
  }, [isLoading]);

  const renderCell = (item: LeaderboardPlayer, columnKey: any) => {
    const columnValue = getKeyValue(item, columnKey);

    if (columnKey === "createdAt")
      return new Date(columnValue).toLocaleDateString();
    if (columnKey === "player") {
      return (
        <User
          name={item.name}
          description={
            <Link href={`/profile/${item.username}`}>{item.username}</Link>
          }
          avatarProps={{
            src: item.image,
            getInitials: (name) => name.charAt(0),
          }}
        />
      );
    }

    return columnValue;
  };

  return (
    <Table
      aria-label="Scores Table"
      classNames={{
        th: "bg-gameRanks_primary text-white",
        wrapper: "bg-gameRanks_secondary",
      }}
      bottomContent={<CustomPagination total={data?.totalCount ?? 0} />}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data?.data ?? []} isLoading={isLoading}>
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
