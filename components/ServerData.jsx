import { serverClient } from "@/trpc/serverTrpc";

export default async function ServerData() {
  const data = await serverClient.users();
  // console.log("hi from server");
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
