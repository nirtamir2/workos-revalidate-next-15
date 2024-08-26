import dynamic from "next/dynamic";
import { ReactNode } from "react";

const ClientOnly = (props: { children: ReactNode }) => {
  const { children } = props;

  return children;
};

export default dynamic(() => Promise.resolve(ClientOnly), {
  ssr: false,
});
