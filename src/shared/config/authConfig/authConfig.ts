import { NextAuthConfig } from "next-auth";
import Credentials from "@auth/core/providers/credentials";

export const config: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash);
        //
        // if (!user) {
        //   throw new Error("User not found.");
        // }
        //
        return user;
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      session = {
        ...session,
        user: {
          ...session.user,
          id: String(token.sub),
        },
      };
      return session;
    },
  },
};
