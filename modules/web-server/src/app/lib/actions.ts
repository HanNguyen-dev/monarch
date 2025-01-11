import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { companiesPath } from "./constants";
import { restHandler } from "./utils";
import { fetchIndustries } from "./api";

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce.number().gt(0, "Please enter an amount greater than $0."),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function addCompany(prevStatus: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice",
    };
  }

  // const { customerId, amount, status } = validatedFields.data;
  // const amountInCents = amount * 100;
  // const date = new Date().toISOString().split("T")[0];

  // try {
  //   await fetchIndustries();
  // } catch {
  //   return {
  //     message: "Database Error: Failed to Create Invoice.",
  //   };
  // }
  revalidatePath(companiesPath);
  redirect(companiesPath);
}
