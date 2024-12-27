"use client";

import React from "react";
import { Company } from "@/app/lib/definitions";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function CompaniesTable({
  companies,
}: {
  companies: Company[];
}) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>COMPANY</TableColumn>
        <TableColumn>HEADQUARTER</TableColumn>
        <TableColumn>INDUSTRY</TableColumn>
      </TableHeader>
      <TableBody>
        {companies.map((company) => {
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
        })}
      </TableBody>
    </Table>
  );
}
