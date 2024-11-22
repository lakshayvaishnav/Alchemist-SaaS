import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";
import { CodeSquare } from "lucide-react";

export default async function handler(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (session) {
    if (req.method === "GET") {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });
      console.log("the user from server is : ", user);
    }
  }
}

export { handler as POST, handler as GET };
