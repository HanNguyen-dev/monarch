"use client";

import { Industry } from "@/app/lib/definitions";
import Link from "next/link";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { addCompany, State } from "@/app/lib/actions";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const initialState: Readonly<State> = { message: null, errors: {} };

export default function Form({ industries }: { industries: Industry[] }) {
  const [state, formAction] = useActionState(addCompany, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <div className="relative mt-2 rounded-md grid grid-cols-2 gap-8">
            <Input
              startContent={
                <BuildingOfficeIcon className="pointer-events-none left-3 top-1/2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
              }
              isRequired
              label="Company name"
              name="companyName"
              id="companyName"
            />
            <Input label="Headquarter" name="headquarter" id="headquarter" />
            <Input label="URL" name="url" id="url" />
            <Select
              label="Select an industry"
              isRequired
              errorMessage={state.errors?.industryId?.reduce((a, b) => {
                return b || a;
              }, "")}
              name="industryId"
            >
              {industries.map((industry) => (
                <SelectItem key={industry.industryId}>
                  {industry.name}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div id="form-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/market/companies"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add company</Button>
      </div>
    </form>
  );
}
