import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import prisma from '@/lib/prismaClient';

export const appRouter = router({
    userList: publicProcedure
        .query(async () => {
            // Retrieve users from a datasource, this is an imaginary database
            // const users = await db.user.findMany();

            // const users: User[]
            return [10, 20, 30];
        }),
    users: publicProcedure
        .query(async () => {
            // Retrieve users from a datasource, this is an imaginary database
            const users = await prisma.user.findMany();

            return users;
        }),
    userCreate: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(async (opts) => {
            // const { input } = opts;

            // const input: {
            //     name: string;
            // }
            // // Create a new user in the database
            // const user = await db.user.create(input);
            // const user: {
            //     name: string;
            //     id: string;
            // }
            return user;
        }),
});

// export type AppRouter = typeof appRouter;