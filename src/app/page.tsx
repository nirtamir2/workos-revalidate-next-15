import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <Link href="/server-component/query">Server component query</Link>
      <Link href="/server-component/mutation">Server component mutation</Link>
      <Link href="/context">context</Link>
      <Link href="/server-actions">server-actions</Link>
      <Link href="/server-actions-with-initial-server-state">
        server-actions-with-initial-server-state
      </Link>
      <Link href="/use">use</Link>
    </ul>
  );
}
