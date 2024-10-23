"use client";
import { CustomPagination, DeleteModal } from "@/src/components";
import { RolesEnum } from "@/src/models";
import { IRootState } from "@/src/store";
import { UserScore } from "@/src/store/models";
import {
  useDeleteScoreMutation,
  useGetUserScoresQuery,
} from "@/src/store/services";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

export const ScoresTable = () => {
  const { role, username } = useSelector((state: IRootState) => state.user);
  const searchParams = useSearchParams();
  const params = useParams<{ username: string }>();

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

  if (
    (role === RolesEnum.ADMIN || username === params.username) &&
    !columns.find((column) => column.key === "delete")
  ) {
    columns.push({
      key: "delete",
      label: "Delete",
    });
  }

  const {
    data,
    isLoading,
    refetch: refetchScores,
  } = useGetUserScoresQuery({
    username: params.username,
    limit: parseInt(searchParams.get("limit") ?? "10"),
    page: parseInt(searchParams.get("page") ?? "1"),
  });

  const [deleteScore] = useDeleteScoreMutation();
  const [scoreIdToDelete, setScoreIdToDelete] = useState<string | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Molecule 
  const renderCell = (item: UserScore, columnKey: any) => {
    const columnValue = getKeyValue(item, columnKey);

    if (columnKey === "createdAt")
      return new Date(columnValue).toLocaleDateString();
    if (columnKey === "delete") {
      return (
        <Button
          size="sm"
          color="danger"
          className="w-fit"
          startContent={<FaTrash size={12} />}
          isIconOnly
          onClick={() => {
            onOpen();
            setScoreIdToDelete(item.id);
          }}
        />
      );
    }

    return columnValue;
  };

  const onDeleteScore = async () => {
    //Promise
    if (scoreIdToDelete) {
      await deleteScore(scoreIdToDelete);
      await refetchScores();
      onOpenChange();
      setScoreIdToDelete(null);
    }
  };

  return (
    <>
      <DeleteModal
        onOpenChange={onOpenChange}
        description="You sure you want to delete this score?"
        isOpen={isOpen}
        title="Delete Score"
        action={onDeleteScore}
      />
      <Table
        isCompact
        aria-label="Scores Table"
        bottomContent={<CustomPagination total={data?.totalPages ?? 0} />}
        classNames={{
          th: "bg-gameRanks_secondary text-white",
          wrapper: "bg-gameRanks_primary shadow-none",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={
            data?.data.slice(0, parseInt(searchParams.get("limit") ?? "10")) ??
            []
          }
          isLoading={isLoading}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
