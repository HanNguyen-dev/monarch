"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

const PAGE_SIZE = 10;

export interface IColTable<T> {
  id: keyof T;
  header: string;
}

interface IPaginatedTable<T> {
  columns: IColTable<T>[];
  rows: T[];
}

export default function PaginatedTable<T>({
  columns,
  rows: data,
}: IPaginatedTable<T>) {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(data.length / PAGE_SIZE);

  const rows = data
    .slice(PAGE_SIZE * (page - 1), page * PAGE_SIZE)
    .map((row, index) => {
      return (
        <TableRow key={index}>
          {columns.map((col, idx) => {
            // TODO: add constraint on the Generic T
            return (
              <TableCell key={idx}>{row[col.id] as React.ReactNode}</TableCell>
            );
          })}
        </TableRow>
      );
    });

  return (
    <Table
      aria-label="Example static collection table"
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
    >
      <TableHeader>
        {columns.map((col, index) => (
          <React.Fragment key={index}>
            <TableColumn>{col.header}</TableColumn>
          </React.Fragment>
        ))}
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}
