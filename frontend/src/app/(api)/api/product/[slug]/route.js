import { NextResponse } from "next/server";

// GET SINGLE PRODUCT
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        slug: slug,
      },
    });

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
