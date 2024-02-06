'use client'

import { trpc } from "@/trpc/trpc";

export default function Home() {
  const data = trpc.userList.useQuery()
  const users = trpc.users.useQuery()
  return (
    <>
      <h1>hiya</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}
