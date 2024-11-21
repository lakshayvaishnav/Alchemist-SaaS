import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Google({
      clientId: "",
      clientSecret: "",
    }),
  ],
};
