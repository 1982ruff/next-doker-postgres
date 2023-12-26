import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const slides = await prisma.slides.findMany();

    return new NextResponse(JSON.stringify(slides), {
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
