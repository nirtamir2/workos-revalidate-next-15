import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "staging", "production"]),
    WORKOS_API_KEY: z.string().min(1),
    WORKOS_CLIENT_ID: z.string().min(1),
    WORKOS_REDIRECT_URI: z.string().min(1),
    WORKOS_COOKIE_PASSWORD: z.string().min(1),
  },

  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    WORKOS_CLIENT_ID: process.env["WORKOS_CLIENT_ID"],
    WORKOS_API_KEY: process.env["WORKOS_API_KEY"],
    WORKOS_REDIRECT_URI: process.env["WORKOS_REDIRECT_URI"],
    WORKOS_COOKIE_PASSWORD: process.env["WORKOS_COOKIE_PASSWORD"],
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // }
});
