import prisma from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
export const authOptions = {
  providers: [
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ??"",
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: profile?.email,
          },
        });
        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              email: profile?.email!,
              name: profile?.name!,
            },
          });
          console.log("user info from authoptions : ", newUser);
        }
        console.log("older user info : ", user);
        return true;
      } catch (error) {
        console.log("error occured while signin from authoptions...");
        return false;
      }
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email as string;
        token.id = account.access_token;
      }

      return token;
    },

    async session({ session, token }) {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: token.email,
          },
        });
        if (user) {
          session.user.id = user.id;
        }
      } catch (error) {
        console.log("error occured while creating the session ");
      }
      console.log("sesssion : ", session);
      return session;
    },
  },
} satisfies NextAuthOptions;
