import { NextRequest, NextResponse } from "next/server";

// TEMPORARIO, SERA SUBSTITUIDO APOS A PRIMEIRA APRESENTACAO
const adminUser = {
  email: "flyra@flyra.tech",
  password: "Flyratcc@2025",
};
const POST = async (req: NextRequest) => {
  const { email, password }: TLoginAPIInput = await req.json();
  if (email === adminUser.email && password === adminUser.password) {
    return NextResponse.json(
      { message: "Login efetuado com sucesso" },
      { status: 200 },
    );
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
