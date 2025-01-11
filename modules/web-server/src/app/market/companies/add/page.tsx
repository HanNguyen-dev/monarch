import { fetchIndustries } from "@/app/lib/api";
import Form from "@/app/ui/companies/add-form";

export default async function Page() {
  const industriesData = await fetchIndustries();
  return (
    <div>
      <Form industries={industriesData.industries} />
    </div>
  );
}
