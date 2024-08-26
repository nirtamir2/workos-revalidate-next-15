"use client";
import { fetchAction } from "@/app/server-actions/fetchAction";
import { useActionState } from "react";

interface Props {}

export function ServerActions(props: Props) {
  const [state, action, isPending] = useActionState(fetchAction, "");
  return (
    <form action={action}>
      <input type="text" name="name" />
      <button>Fetch</button>
      <div>{isPending ? "Loading..." : null}</div>
      <div>State: {state}</div>
    </form>
  );
}
