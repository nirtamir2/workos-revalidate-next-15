import type { User } from "@workos-inc/node";
import { sealData } from "iron-session";
import { cookies } from "next/headers";
import "server-only";
import { cookieName, cookieOptions } from "@/server/workos/cookie";
import { env } from "@/env";

interface Impersonator {
  email: string;
  reason: string | null;
}

interface Session {
  accessToken: string;
  refreshToken: string;
  user: User;
  impersonator?: Impersonator;
}

async function encryptSession(session: Session) {
  return await sealData(session, { password: env.WORKOS_COOKIE_PASSWORD });
}

export async function setWorkOSAuthCookie(sessionData: Session) {
  const session = await encryptSession(sessionData);
  cookies().set(cookieName, session, cookieOptions);
}
