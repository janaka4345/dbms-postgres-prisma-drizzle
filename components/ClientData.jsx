"use client";
import { trpc } from "@/trpc/trpc";
export default function ClientData() {
  const data = trpc.users.useQuery();
  // console.log("hi from client");

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
