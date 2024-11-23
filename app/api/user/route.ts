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
      return NextResponse.json({ user: user });
    }

    if (req.method === "POST") {
      const { firstname, lastname, email } = await req.json();
      try {
        const user = await prisma.user.update({
          select: {
            email: true,
            name: true,
          },
          data: {
            name: `${firstname} ${lastname}`,
            email: email,
          },
          where: {
            id: session.user.id,
          },
        });

        return NextResponse.json({message : "udpated the data successfully "});
      } catch (error) {
        console.log("error occured while updating the user : ", error);
        return NextResponse.json({message: "not able to update the data"});
      }
    }
  }
}

export { handler as POST, handler as GET };
