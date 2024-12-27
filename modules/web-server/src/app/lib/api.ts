import { Company } from "./definitions";

const baseUrl = process.env.API_BASE_URL;

export async function fetchJobs() {
  return await fetch(`${baseUrl}/jobs`);
}
export async function fetchCompanies(): Promise<{ companies: Company[] }> {
  return await fetch(`${baseUrl}/companies`).then(async (resp) => {
    if (resp.ok) {
      return await resp.json();
    }
    throw new Error("Failed fetching companies");
  });
}
