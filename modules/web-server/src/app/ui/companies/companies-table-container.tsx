import { fetchCompanies } from "@/app/lib/api";
import CompaniesTable from "./companies-table";

export default async function CompaniesTableContainer() {
  const companiesData = await fetchCompanies();

  return <CompaniesTable companies={companiesData.companies} />;
}
