"use client";

import { logout } from "@/server/actions/logout";
import { useActionState } from "react";

export function LogoutForm() {
  const [logoutState, logoutAction, isPending] = useActionState(logout, null);
  return (
    <form className="flex flex-col" action={logoutAction}>
      <button disabled={isPending} type="submit" >
        Logout
      </button>
      {logoutState == null ? null : JSON.stringify(logoutState)}
    </form>
  );
}
