export type Company = {
  companyId: number;
  name: string;
  headquarter: string;
  industry: string;
};

export type Job = {
  jobId: number;
  title: string;
  frontend: string;
  backend: string;
  storeDb: string;
  cloud: string;
  languages: string;
  experience: string;
  appliedDate: Date;
  completedDate: Date;
  status: string;
  companyName: string;
  url: string;
};
