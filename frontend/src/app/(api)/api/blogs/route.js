import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const blogs = await prisma.blogs.findMany();

    return new NextResponse(JSON.stringify(blogs), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "Something goes wrong" }),
      {
        status: 500,
      }
    );
  }
};
