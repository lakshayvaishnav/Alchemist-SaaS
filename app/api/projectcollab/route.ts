import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function handler(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (session) {
    if (req.method === "POST") {
      const data = await prisma.project.create({
        data: {
          authorId: session.user.id,
          name: "test",
          icon: "/lxsh.jpg",
          description: "demo proj from api",
          developerAvatar: "fetch it from api",
          developerName: "also fetch it from api",
          githubUrl: "fetch it github api",
        },
      });
      console.log("created a project successfully ✅ : ", data);
      return NextResponse.json({ message: "all good vaii." });
    }
  }
}

export { handler as GET, handler as POST };
