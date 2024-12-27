import { Suspense } from "react";
import ApplicationsTable from "@/app/ui/applications/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  return (
    <div className="">
      <div className="pb-8 text-xl font-bold">Applications</div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <ApplicationsTable />
      </Suspense>
    </div>
  );
}
