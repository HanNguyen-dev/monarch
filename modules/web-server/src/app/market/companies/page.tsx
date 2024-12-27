import { Suspense } from "react";
import CompaniesTableContainer from "@/app/ui/companies/companies-table-container";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  return (
    <div className="">
      <div className="pb-8 text-xl font-bold">Companies</div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CompaniesTableContainer />
      </Suspense>
    </div>
  );
}
