import { fetchCompanies } from "@/app/lib/api";
import PaginatedTable, { IColTable } from "../common/paginated-table";
import { Company } from "@/app/lib/definitions";

const columns: IColTable<Company>[] = [
  {
    id: "companyId",
    header: "ID",
  },
  {
    id: "name",
    header: "COMPANY",
  },
  {
    id: "headquarter",
    header: "HEADQUARTER",
  },
  {
    id: "industry",
    header: "INDUSTRY",
  },
];

export default async function CompaniesTable() {
  const companiesData = await fetchCompanies();

  return <PaginatedTable columns={columns} rows={companiesData.companies} />;
}
