import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { title, content, imageUrl, simpleDescription } = await req.json();
    const isValidUser =
      req.cookies.get("authToken")?.value === process.env.AUTH_TOKEN;
    if (!isValidUser)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    if (!title || !content || !simpleDescription)
      return NextResponse.json(
        { message: "Title, and Content are required." },
        { status: 400 },
      );

    if (
      title.length < 5 ||
      content.length < 10 ||
      simpleDescription.length < 10 ||
      title.length > 100
    ) {
      return NextResponse.json(
        {
          message: "Invalid propierts length.",
        },
        { status: 400 },
      );
    }
    const slug = title
      .toLowerCase()
      .normalize("NFD") // Decompor caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos (acentos)
      .replace(/\s+/g, "-") // Substitui espaços por "-"
      .replace(/ç/g, "c") // Substitui "ç" por "c"
      .replace(/[^\w-]+/g, ""); // Remove caracteres especiais

    try {
      const hasPostWithSlug = await prisma.post.findFirst({
        where: {
          slug,
        },
      });

      if (hasPostWithSlug) {
        return NextResponse.json(
          { message: "Já existe um post com este título" },
          { status: 400 },
        );
      }

      await prisma.post.create({
        data: {
          title,
          content,
          imageUrl,
          simpleDescription,
          slug,
        },
      });
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { message: "Error while creating post" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: "Post created",
        data: {
          title,
          content,
          imageUrl,
          simpleDescription,
          slug,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.log("Error while creating post", error);
    return NextResponse.json(
      { message: "Error Occured While Registering the user." },
      { status: 500 },
    );
  }
}
