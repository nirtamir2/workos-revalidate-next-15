import { env } from "@/env";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";

export const cookieName = "wos-session";
export const cookieOptions = {
  path: "/",
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
};

export async function getSessionFromCookie() {
  const cookie = cookies().get(cookieName);
  if (cookie) {
    return await unsealData<{ accessToken: string }>(cookie.value, {
      password: env.WORKOS_COOKIE_PASSWORD,
    });
  }
  return null;
}
