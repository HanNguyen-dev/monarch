import PlusIcon from "@heroicons/react/16/solid/esm/PlusIcon";
import Link from "next/link";

export function AddCompany() {
  return (
    <Link
      href="/market/companies/add"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      <span className="hidden md:block">Add company</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
