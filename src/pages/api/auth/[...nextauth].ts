import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAccount } from "@/services/auth.service";

export const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Login Data",
      credentials: {
        email: { label: "E-mail", placeholder: "Enter your e-mail" },
        password: { label: "Password", placeholder: "Enter your password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await loginAccount(credentials?.email || "", credentials?.password || "");
        return user || null;
      },
    })
  ],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.username = token.name as string;
      }
      return session;
    },
    async jwt({ token, account, user }) {
      if (user) {
        token.name = user?.username;
      }
      return token;
    },
  },
}

export default NextAuth(options);