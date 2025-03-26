import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme.provider";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";
import { Providers } from "@/providers/providers.provider";
import { UserStoreProvider } from "@/providers/stores/user-store.provider";

export const metadata: Metadata = {
  title: "Flyra TCC",
  description:
    "Projeto de TCC (3ºDS 2025, Etec Jaraguá) que desenvolve drones com inteligência artificial para detectar e prevenir incêndios, oferecendo soluções rápidas e eficazes para proteger o meio ambiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`h-dvh overflow-y-scroll w-full antialiased`}>
        <Providers>
          <UserStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              <NuqsAdapter>
                <Toaster position="top-center" />
                {children}
              </NuqsAdapter>
            </ThemeProvider>
          </UserStoreProvider>
        </Providers>
      </body>
    </html>
  );
}
