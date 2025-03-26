import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GradientTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h1
      className={cn(
        "text-balance bg-gradient-to-br from-black from-25% to-white bg-clip-text py-4 text-5xl font-bold  tracking-tighter text-transparent dark:from-white dark:to-black",
        className,
      )}
    >
      {children}
    </h1>
  );
}
