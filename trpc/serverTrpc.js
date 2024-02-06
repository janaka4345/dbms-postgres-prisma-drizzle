
import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc";

export const createCaller = createCallerFactory(appRouter);
//create a caller using your `Context`
export const serverClient = createCaller({});