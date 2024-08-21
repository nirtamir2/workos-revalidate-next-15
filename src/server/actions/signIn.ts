"use server";

import { revalidatePath } from "next/cache";
import "server-only";
import { z } from "zod";
import { env } from "@/env";
import { handleWorkOSError } from "@/server/workos/handleWorkOSError";
import { setWorkOSAuthCookie } from "@/server/workos/setWorkOSAuthCookie";
import { workos } from "@/server/workos/workos";

const formDataSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function signIn(_: unknown, formData: FormData) {
  try {
    const { email, password } = formDataSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const user = await workos.userManagement.authenticateWithPassword({
      clientId: env.WORKOS_CLIENT_ID,
      email,
      password,
    });

    await setWorkOSAuthCookie(user);
    revalidatePath("/", "layout");
    return null;
  } catch (error) {
    return handleWorkOSError(error);
  }
}
