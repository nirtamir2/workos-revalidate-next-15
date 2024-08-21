import { authkitMiddleware } from "@workos-inc/authkit-nextjs";
import type { NextFetchEvent } from "next/dist/server/web/spec-extension/fetch-event";
import type { NextRequest } from "next/server";
import "server-only";

export async function middleware(req: NextRequest, event: NextFetchEvent) {

  return await authkitMiddleware()(req, event);
}

export const config = {};
