import { Company, Job } from "./definitions";
import { restHandler } from "./utils";

const baseUrl = process.env.API_BASE_URL;

export async function fetchJobs() {
  return await restHandler<{ jobs: Job[] }>(`${baseUrl}/jobs`);
}
export async function fetchCompanies() {
  return await restHandler<{ companies: Company[] }>(`${baseUrl}/companies`);
}
