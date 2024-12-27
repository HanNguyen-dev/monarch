import { fetchJobs } from "@/app/lib/api";
import PaginatedTable, { IColTable } from "../common/paginated-table";
import { Job } from "@/app/lib/definitions";

const columns = [
  {
    id: "jobId",
    header: "ID",
  },
  {
    id: "title",
    header: "TITLE",
  },
  {
    id: "companyName",
    header: "COMPANY",
  },
  {
    id: "frontend",
    header: "FRONTEND",
  },
  {
    id: "backend",
    header: "BACKEND",
  },
] satisfies IColTable<Job>[];

export default async function ApplicationsTable() {
  const jobsData = await fetchJobs();

  return <PaginatedTable columns={columns} rows={jobsData.jobs} />;
}
