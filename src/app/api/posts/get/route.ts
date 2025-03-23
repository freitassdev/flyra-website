import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get("id");
  const slug = req.nextUrl.searchParams.get("slug");
  try {
    if (id || slug) {
      const post = await prisma.post.findFirst({
        where: {
          OR: [{ id: id ? id : undefined }, { slug: slug ? slug : undefined }],
        },
      });

      if (post) {
        return NextResponse.json(
          { allPosts: [post], totalPosts: 1 },
          { status: 200 },
        );
      }

      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    const totalPosts = await prisma.post.count();
    const allPosts = await prisma.post.findMany();
    return NextResponse.json(
      { allPosts, totalPosts },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "public, s-maxage=3600, stale-while-revalidate=86400", // Cache por 1 hora e revalidação por 24 horas
        },
      },
    );
  } catch (error) {
    console.log("Error while getting post", error);
    return NextResponse.json(
      { message: "Error Occured While getting the post." },
      { status: 500 },
    );
  }
};
