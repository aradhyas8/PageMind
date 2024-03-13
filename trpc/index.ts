import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

const appRouter = router({
  // Define your procedures here
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser(); // Assuming getUser is an async function, await its result

    // Check if the user exists and has the necessary properties
    if (!user || !user.id || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    // Return success if the user checks pass
    return { success: true };
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
