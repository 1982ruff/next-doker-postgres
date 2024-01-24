import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body.data;

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email, or password!", {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse(
      { message: "User already exist!" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
