import { NextResponse } from "next/server";

// GET SINGLE BLOG
export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    const fullBlogs = await prisma.fullBlog.findUnique({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify(fullBlogs), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
