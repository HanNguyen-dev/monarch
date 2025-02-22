import { Company, Industry, Job } from "./definitions";
import { restHandler } from "./utils";

const baseUrl = process.env.API_BASE_URL;

export async function fetchJobs() {
  return await restHandler<{ jobs: Job[] }>(`${baseUrl}/jobs`);
}
export async function fetchCompanies() {
  return await restHandler<{ companies: Company[] }>(`${baseUrl}/companies`);
}

export async function fetchIndustries() {
  return await restHandler<{ industries: Industry[] }>(`${baseUrl}/industries`);
}

export async function postCompanies(company: {
  name: string;
  headquarter: string;
  url: string;
  industryId: number;
}) {
  return await restHandler<{ industryId: string }>(
    `${baseUrl}/companies`,
    "POST",
    company
  );
}
