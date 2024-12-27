import { fetchJobs } from "@/app/lib/api";
import ApplicationsTable from "./applications-table";

export default async function ApplicationsTableContainer() {
  const jobsData = await fetchJobs();

  return <ApplicationsTable applications={jobsData.jobs} />;
}
