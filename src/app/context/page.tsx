import { AProvider } from "@/app/context/AContext";
import { FetchDataThatReliesOnContextValue } from "@/app/context/FetchData";

export default function ContextPage() {
  return (
    <AProvider>
      <FetchDataThatReliesOnContextValue />
    </AProvider>
  );
}
