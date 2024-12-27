import { Company } from "../../lib/definitions";

export default function CompaniesTable({
  companies,
}: {
  companies: Company[];
}) {
  return (
    <>
      <div>Companies Page</div>
      <div className="mt-6 flow-root p-10">
        <div className="inline-block align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th className="px-4 py-5 font-medium sm:pl-6">Company ID</th>
                  <th className="px-4 py-5 font-medium">Name</th>
                  <th className="px-4 py-5 font-medium">Headquarter</th>
                  <th className="px-4 py-5 font-medium">Industry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-900">
                {companies.map((company) => {
                  return (
                    <tr key={company.companyId}>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {company.companyId}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {company.name}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {company.headquarter}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {company.industry}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
