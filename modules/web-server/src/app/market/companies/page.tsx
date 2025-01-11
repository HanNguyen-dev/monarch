import { Suspense } from "react";
import CompaniesTable from "@/app/ui/companies/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { AddCompany } from "@/app/ui/companies/buttons";

export default async function Page() {
  return (
    <div className="">
      <div className="flex items-center justify-between pb-8">
        <div className="text-xl font-bold">Companies</div>
        <AddCompany />
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CompaniesTable />
      </Suspense>
    </div>
  );
}
