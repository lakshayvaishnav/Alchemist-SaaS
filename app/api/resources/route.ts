import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import prisma from "@/lib/prisma";

async function handler(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "login marlo vaii 😭" });
  }

  if (req.method === "POST") {
    const { name, image, description, category } = await req.json();
    console.log(
      "name image description category :",
      name,
      image,
      description,
      category
    );

    try {
      const data = await prisma.resource.create({
        data: {
          description: description,
          name: name,
          image: image,
          category: category,
        },
      });

      console.log("resource created successfully: ", data);
      return NextResponse.json({ data: data });
    } catch (error) {
      console.error("Error occurred while creating resource:", error);
      return NextResponse.json({ message: "Error occurred while creating resource." }, { status: 500 });
    }
  }

  if (req.method === "GET") {
    const data = await prisma.resource.findMany();
    console.log("Found all the resources: ", data);
    return NextResponse.json({ data: data });
  }

  // Handle unsupported methods
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}

export { handler as GET, handler as POST };