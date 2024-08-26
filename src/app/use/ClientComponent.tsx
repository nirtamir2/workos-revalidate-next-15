"use client";
import { UsePromiseClientComponent } from "@/app/use/UsePromiseClientComponent";
import { useState } from "react";
import { fetchData } from "@/app/use/fetchData";

export function ClientComponent() {
  const [counter, setCounter] = useState(1);
  const promise = fetchData(counter);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        +
      </button>
      <UsePromiseClientComponent promise={promise} />
    </div>
  );
}
