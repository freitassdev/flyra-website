import { NextRequest, NextResponse } from "next/server";

// TEMPORARIO, SERA SUBSTITUIDO APOS A PRIMEIRA APRESENTACAO
const adminUser = {
  email: "flyra@flyra.tech",
  password: "Flyratcc@2025",
};
const POST = async (req: NextRequest) => {
  const { email, password }: TLoginAPIInput = await req.json();
  if (email === adminUser.email && password === adminUser.password) {
    const response = NextResponse.json(
      { message: "Login efetuado com sucesso" },
      { status: 200 },
    );

    response.cookies.set(
      "authToken",
      process.env.AUTH_TOKEN ?? "natan judas e falso cristão",
      {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
      },
    );
    console.log(process.env.AUTH_TOKEN);
    return response;
  }
  return NextResponse.json(
    { message: "Email ou senha incorretos" },
    { status: 401 },
  );
};

export type TLoginAPIInput = {
  email: string;
  password: string;
};

export type TLoginAPIOutput = {
  message: string;
};

export { POST };
