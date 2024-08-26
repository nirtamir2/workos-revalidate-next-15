"use client";
import { AContext } from "@/app/context/AContext";
import { use } from "react";
import { fetchDataFromServer } from "@/app/context/fetchDataFromServer";

export async function FetchDataThatReliesOnContextValue() {
  const value = use(AContext);
  const data = await fetchDataFromServer(value.field);
  return <div>Data is: {data}</div>;
}
