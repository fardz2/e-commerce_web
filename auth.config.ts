import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import db from "./db";
import { comparePassword, saltAndHashPassword } from "./lib/password";

 
export default { providers: [
  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: { label: "Email" ,type:"email"},
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      if (!credentials || !credentials.email || !credentials.password) {
        return null;
      }
      const email = credentials.email as string;
      let user: any = await db.user.findUnique({
        where: {
          email,
        },
      });
      if(user){
        const isMatch = comparePassword(credentials.password as string, user.password);
        if (!isMatch) {
            throw new Error("Incorrect password.");
        }
        return user;
      }else{
        throw new Error("You have to create an account first.");
      }
    },
  }), Google({
    profile(profile) {
      return { id: profile.sub, role: profile.role ?? "user", email: profile.email ,name: profile.name, image: profile.picture };
    },
  }) ] } satisfies NextAuthConfig