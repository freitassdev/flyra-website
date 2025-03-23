"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../components/blog/editor"), {
  ssr: false,
});
export default function NewPostPage() {
  return (
    <div>
      <Editor />
    </div>
  );
}
