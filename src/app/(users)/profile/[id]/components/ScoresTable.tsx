"use client";
import { UserScore } from "@/src/store/models";
import { useGetUserScoresQuery } from "@/src/store/services";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
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
import { useParams } from "next/navigation";
import { useState, useMemo } from "react";

export const ScoresTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const params = useParams<{ username: string }>();
  const { data } = useGetUserScoresQuery(params.username);

  const pages = data ? Math.ceil(data?.length / rowsPerPage) : 0;

  const items: UserScore[] = useMemo(() => {
    if (data) {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      return data.slice(start, end);
    }

    return [];
  }, [page, data]);

  return (
    <Card className="flex-[2] bg-gameRanks_secondary text-white">
      <CardHeader>
        <h3>Relevant Data</h3>
      </CardHeader>
      <CardBody className="max-h-[450px]">
        <Table
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[400px] max-h-[400px] bg-gameRanks_primary shadow-none",
          }}
        >
          <TableHeader>
            <TableColumn key="score">Score</TableColumn>
            <TableColumn key="game">Game</TableColumn>
            <TableColumn key="createdAt">Created At</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};
