import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Providers from "next-auth/providers";
import db from "./db";

export const AuthOptions = {
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/veify-request",
  },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },

  events: {
    async signIn({ user }) {
      console.log({ user }, "Signed in");
    },
  },
};
