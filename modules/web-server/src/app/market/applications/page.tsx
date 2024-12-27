import { Suspense } from "react";
import ApplicationsTableContainer from "@/app/ui/applications/applications-table-container";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default async function Page() {
  return (
    <div className="">
      <div className="pb-8 text-xl font-bold">Applications</div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <ApplicationsTableContainer />
      </Suspense>
    </div>
  );
}
