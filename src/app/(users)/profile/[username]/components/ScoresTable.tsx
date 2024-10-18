"use client";
import { useEffect, useState } from "react";
import { useGetUserScoresQuery } from "@/src/store/services";
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

import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";

export const ScoresTable = () => {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(
    parseInt(searchParams.get("scoresPage") ?? "1")
  );
  const rowsPerPage = 10;

  const pathname = usePathname();
  const router = useRouter();

  const params = useParams<{ username: string }>();
  const { data, isLoading } = useGetUserScoresQuery({
    username: params.username,
    limit: rowsPerPage,
    page,
  });

  const pages = data ? Math.ceil(data?.length / rowsPerPage) : 0;

  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    query.set("scoresPage", page.toString());

    router.replace(`${pathname}?${query.toString()}`);
  }, [page, searchParams]);

  const columns = [
    {
      key: "score",
      label: "Score",
    },
    {
      key: "game",
      label: "Game",
    },
    {
      key: "createdAt",
      label: "Creation Date",
    },
  ];

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
          variant="flat"
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
              <TableCell>
                {columnKey === "createdAt"
                  ? new Date(getKeyValue(item, columnKey)).toLocaleDateString()
                  : getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
