
"use client";
import { signIn } from "@/server/actions/signIn";
import { useActionState, useId } from "react";

export function LoginForm() {

  const emailId = useId();
  const passwordId = useId();

  const [signInState, signInAction, isPending] = useActionState(signIn, null);

  if (
    signInState != null &&
    signInState.code === "email_verification_required" &&
    signInState.pendingAuthenticationToken != null
  ) {
    return (
      <div>Email verification...</div>
    );
  }

  return (
    <form
      action={signInAction}
      className="grid grid-cols-[minmax(0,auto)_minmax(0,theme(space.64))] items-center justify-center gap-x-8"
    >
      <label htmlFor={emailId}>Email</label>
      <input
        required
        type="email"
        autoCapitalize="off"
        autoComplete="username"
        name="email"
        id={emailId}
        placeholder="Your email"
      />
      <div className="col-span-full h-5" />
      <label htmlFor={passwordId}>Password</label>
      <input
        type="password"
        required
        name="password"
        id={passwordId}
        placeholder="Your password"
        autoCapitalize="off"
        autoComplete="current-password"
      />

      <div className="col-span-full h-5" />
      {signInState == null ? null : (
        <div className="col-span-full">
          {JSON.stringify(signInState)}
        </div>
      )}
      <div className="col-span-full flex justify-center pt-4">
        <button disabled={isPending} type="submit">
          Log in
        </button>
      </div>
    </form>
  );
}
