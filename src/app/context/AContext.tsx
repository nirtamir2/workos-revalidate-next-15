"use client";
import React, { createContext, useMemo, useState } from "react";

type ContextType = {
  field: string;
};

export const AContext = createContext<ContextType>({
  field: "",
});

type Props = {
  children: React.ReactNode;
};

export const AProvider = ({ children }: Props) => {
  const [state, setState] = useState({
    field: "text",
  });
  const value = useMemo(() => state, [state]);

  return <AContext.Provider value={value}>{children}</AContext.Provider>;
};
