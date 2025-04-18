import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Página não encontrada</p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        <Button>Voltar para a home</Button>
      </Link>
    </div>
  );
}
