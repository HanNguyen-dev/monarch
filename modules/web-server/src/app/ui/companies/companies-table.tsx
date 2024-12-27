"use client";

import React, { useState } from "react";
import { Company } from "@/app/lib/definitions";
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

export default function CompaniesTable({
  companies,
}: {
  companies: Company[];
}) {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(companies.length / PAGE_SIZE);

  const rows = companies
    .slice(PAGE_SIZE * (page - 1), page * PAGE_SIZE)
    .map((company) => {
      return (
        <React.Fragment key={company.companyId}>
          <TableRow key={company.companyId}>
            <TableCell>{company.companyId}</TableCell>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.headquarter}</TableCell>
            <TableCell>{company.industry}</TableCell>
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
        <TableColumn>COMPANY</TableColumn>
        <TableColumn>HEADQUARTER</TableColumn>
        <TableColumn>INDUSTRY</TableColumn>
      </TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
}
