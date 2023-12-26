import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const promos = await prisma.promo.findMany();

    return new NextResponse(JSON.stringify(promos), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      {
        status: 500,
      }
    );
  }
};
