import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");

  try {
    const product = await prisma.product.findMany({
      where: {
        ...(category ? { catSlug: category } : { isNew: true }),
      },
    });

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
