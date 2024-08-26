"use client";
import { UsePromiseClientComponent } from "@/app/use-client-only/UsePromiseClientComponent";
import { Suspense, useState } from "react";
import { fetchData } from "@/app/use-client-only/fetchData";

export function ClientComponent() {
  const [counter, setCounter] = useState(1);
  const promise = fetchData(counter);
  return (
    <div>
      <Suspense fallback={<div>Loading {counter}...</div>}>
        <UsePromiseClientComponent promise={promise} />
      </Suspense>
      <button
        type="button"
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
