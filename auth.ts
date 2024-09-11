import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import db from "./db"
import authConfig from "./auth.config"

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session:{strategy: "jwt"},
  ...authConfig, callbacks: {
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   if (pathname === "/middleware-example") return !!auth
    //   return true
    // },
    async jwt({ token,user, trigger }) {
      if(user) token.role = user.role
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },

    async redirect({ url, baseUrl ,}){
      return '/';
    }
    
  
 
  },
  pages: {
    signIn: "/login",
  },
})