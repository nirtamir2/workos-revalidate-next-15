import { use } from "react";

interface Props {
  promise: Promise<string>;
}

export function UsePromiseClientComponent(props: Props) {
  const { promise } = props;
  const data = use(promise);
  return <div>The resolved value is {data}</div>;
}
