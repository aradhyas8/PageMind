
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
  // Define your procedures here
  authCallback: publicProcedure.query(async () => {
    try {
      console.log("authCallback called");

    const { getUser } = getKindeServerSession();
    const user = await getUser(); // Assuming getUser is an async function, await its result

    const uid = user?.id;
    const eid = user?.email;
    // Check if the user exists and has the necessary properties
    if (!uid || !eid) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

      // Return success if the user checks pass
      const dbUser = await db.user.findFirst({
        where: {
          id: uid,
        },
      });

      if (!dbUser) {
        //create user in db
        await db.user.create({
          data: {
            id: uid,
            email: eid,
          },
        });
      }
      console.log("authCallback success");
      return { success: true };
    } catch (error) {
      console.error("Error in authCallback:", error);
       throw new TRPCError({
         code: "INTERNAL_SERVER_ERROR",
         message: "An error occurred during authentication.",
       });
    }
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
