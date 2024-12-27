"use client";

import React, { useState } from "react";
import { Job } from "@/app/lib/definitions";
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

export default function ApplicationsTable({
  applications,
}: {
  applications: Job[];
}) {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(applications.length / PAGE_SIZE);

  const rows = applications
    .slice(PAGE_SIZE * (page - 1), page * PAGE_SIZE)
    .map((application) => {
      return (
        <React.Fragment key={application.jobId}>
          <TableRow key={application.jobId}>
            <TableCell>{application.jobId}</TableCell>
            <TableCell>{application.title}</TableCell>
            <TableCell>{application.companyName}</TableCell>
            <TableCell>{application.frontend}</TableCell>
          </TableRow>
        </React.Fragment>
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
        <TableColumn>ID</TableColumn>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>COMPANY</TableColumn>
        <TableColumn>FRONTEND</TableColumn>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}
