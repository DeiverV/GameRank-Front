"use client";
import { useEffect, useState } from "react";
import { useGetLeaderboardQuery } from "@/src/store/services";
import { Pagination } from "@nextui-org/pagination";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { LeaderboardPlayer } from "@/src/store/models";
import { User } from "@nextui-org/user";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setTopLeaderboardUsers } from "@/src/store/slices";

export const LeaderTable = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page") ?? "1"));
  const dispatch = useDispatch();

  const rowsPerPage = 10;

  const { data, isLoading, isSuccess } = useGetLeaderboardQuery({
    game: "Tetris",
    limit: rowsPerPage,
    page,
  });

  const pages = data ? Math.ceil(data?.length / rowsPerPage) : 0;

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("page", page.toString());

    router.replace(`${pathname}?${query.toString()}`);
  }, [page, searchParams]);

  useEffect(() => {
    if (isLoading) return;
    if (isSuccess) {
      dispatch(setTopLeaderboardUsers(data?.slice(0, 3) ?? []));
    }
  }, [isLoading]);

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
    {
      key: "email",
      label: "Email",
    },
  ];

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
      bottomContent={
        <Pagination
          showControls
          showShadow
          classNames={{
            base: "w-full",
            next: "bg-gameRanks_primary",
            prev: "bg-gameRanks_primary",
          }}
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data ?? []} isLoading={isLoading}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
