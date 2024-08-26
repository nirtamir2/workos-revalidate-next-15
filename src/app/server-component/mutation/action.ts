"use server";

import "server-only";
import { z } from "zod";

const formDataSchema = z.object({
  name: z.string(),
});


export async function getSomething(
  variable: unknown,
  prevState: unknown,
  formData: FormData,
) {
  const { name } = formDataSchema.parse({
    name: formData.get("name"),
  });
}
