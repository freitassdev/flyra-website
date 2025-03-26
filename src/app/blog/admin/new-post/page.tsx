"use client";

import GradientTitle from "@/components/shared/gradient-title";
import Navbar from "@/components/shared/navbar";
import Loader from "@/components/ui/loader";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Editor = dynamic(() => import("../../../../components/blog/editor"), {
  ssr: false,
  loading: () => <SuspenseFallback />,
});
export default function NewPostPage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Navbar />
      <div className="mt-28 max-w-6xl w-full">
        <GradientTitle>Criar um novo post.</GradientTitle>
        <Suspense fallback={<SuspenseFallback />}>
          <Editor />
        </Suspense>
      </div>
    </div>
  );
}

function SuspenseFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Loader />
    </div>
  );
}
