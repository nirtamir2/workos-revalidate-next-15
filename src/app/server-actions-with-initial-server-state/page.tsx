import { ServerActionsWithInitialValue } from "@/app/server-actions-with-initial-server-state/ServerActionsWithInitialValue";

export default async function ServerActionsWithInitialServerStatePage() {
  const initialData = await Promise.resolve("Initial value from server");
  return <ServerActionsWithInitialValue initialData={initialData} />;
}
