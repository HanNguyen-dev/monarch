import { applicationsPath, companiesPath } from "@/app/lib/constants";
import Link from "next/link";

const links = [
  {
    name: "Companies",
    url: companiesPath,
  },
  {
    name: "Applications",
    url: applicationsPath,
  },
];

export default function SideNav() {
  return (
    <div className="flex flex-col h-full p-8">
      <span className="text-xl font-bold">Market</span>
      <div className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
