import { ClientComponent } from "@/app/use-client-only/ClientComponent";
import ClientOnly from "@/app/use-client-only/ClientOnly";

export default function UsePage() {
  return (
    <ClientOnly>
      <ClientComponent />
    </ClientOnly>
  );
}
