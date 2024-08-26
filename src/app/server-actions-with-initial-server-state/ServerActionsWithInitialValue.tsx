"use client";
import { fetchAction } from "@/app/server-actions/fetchAction";
import { useActionState } from "react";

interface Props {
  initialData: string;
}

export function ServerActionsWithInitialValue(props: Props) {
  const { initialData } = props;
  const [state, action, isPending] = useActionState(fetchAction, initialData);
  return (
    <form action={action}>
      <input type="text" name="name" />
      <button>Fetch</button>
      <div>{isPending ? "Loading..." : null}</div>
      <div>State: {state}</div>
    </form>
  );
}
