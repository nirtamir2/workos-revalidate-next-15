import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/server-component/query">Server component query</Link>
      </li>
      <li>
        <Link href="/server-component/mutation">Server component mutation</Link>
      </li>
      <li>
        <Link href="/context">context</Link>
      </li>
      <li>
        <Link href="/server-actions">server-actions</Link>
      </li>
      <li>
        <Link href="/server-actions-with-initial-server-state">
          {" "}
          server-actions-with-initial-server-state
        </Link>
      </li>
      <li>
        <Link href="/use">use</Link>
      </li>
    </ul>
  );
}
