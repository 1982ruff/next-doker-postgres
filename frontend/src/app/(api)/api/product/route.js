import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const product = await prisma.product.findMany();

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      {
        status: 500,
      }
    );
  }
};

export const POST = async () => {};
