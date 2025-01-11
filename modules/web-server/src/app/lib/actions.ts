"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { companiesPath } from "./constants";
import { postCompanies } from "./api";

const FormSchema = z.object({
  companyName: z.string(),
  industryId: z.string(),
  headquarter: z.string(),
  url: z.string(),
});

export type State = {
  errors?: {
    companyName?: string[];
    industryId?: string[];
    headquarter?: string[];
    url?: string[];
  };
  message?: string | null;
};

const AddCompany = FormSchema.omit({});

export async function addCompany(prevStatus: State, formData: FormData) {
  const validatedFields = AddCompany.safeParse({
    companyName: formData.get("companyName"),
    industryId: formData.get("industryId"),
    headquarter: formData.get("headquarter"),
    url: formData.get("url"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Add Company",
    };
  }

  const { companyName, industryId, headquarter, url } = validatedFields.data;

  try {
    await postCompanies({
      name: companyName,
      industryId: parseInt(industryId),
      headquarter,
      url,
    });
  } catch (error) {
    const errorObj = error as Error;
    return {
      message: errorObj.message,
    };
  }
  revalidatePath(companiesPath);
  redirect(companiesPath);
}
