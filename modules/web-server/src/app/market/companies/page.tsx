import { Suspense } from "react";
import CompaniesTable from "@/app/ui/companies/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  return (
    <div className="">
      <div className="pb-8 text-xl font-bold">Companies</div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CompaniesTable />
      </Suspense>
    </div>
  );
}
