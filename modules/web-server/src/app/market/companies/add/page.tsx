import { fetchIndustries } from "@/app/lib/api";
import Form from "@/app/ui/companies/add-form";

export default async function Page() {
  const industriesData = await fetchIndustries();
  return (
    <div>
      <div className="pb-8 text-xl font-bold">Add company</div>
      <Form industries={industriesData.industries} />
    </div>
  );
}
