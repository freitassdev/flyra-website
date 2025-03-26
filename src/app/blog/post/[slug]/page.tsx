"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import "@blocknote/mantine/style.css";
import "@blocknote/react/style.css";
import "@/components/blog/blocknote.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/navbar";
import Loader from "@/components/ui/loader";
import GradientTitle from "@/components/shared/gradient-title";
import Footer from "@/components/global/footer";

export default function PostPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [simpleDescription, setSimpleDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [createdAt, setCreatedAt] = useState<Date>();
  const [formatedDate, setFormatedDate] = useState<string>("");

  const router = useRouter();
  const { slug: initialSlug } = useParams<{ slug: string }>();
  const slug = initialSlug
    .toLowerCase()
    .normalize("NFD") // Decompor caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos (acentos)
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/ç/g, "c"); // Substitui "ç" por "c"

  useEffect(() => {
    if (!slug) {
      router.push("/blog");
      return;
    }

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/get?slug=${slug}`, {
          method: "GET",
        });

        const response: { message: string } = await res.json();

        if (res.ok && response && !("message" in response)) {
          console.log(response);
          const post = response.allPosts[0];
          setTitle(post.title);
          const processedHtml = post.content.replace(
            /<div class="bn-block-content"[^>]*data-url="(.*?)"[^>]*>.*?<img.*?>.*?<\/div>/g,
            (match, url) => {
              return `<img src="${url}" alt="Imagem" />`;
            },
          );
          setContent(processedHtml);
          const verifiedImageUrl = await verifyImageUrl(post.imageUrl ?? "");
          setImageUrl(verifiedImageUrl ?? "");
          setSimpleDescription(post.simpleDescription);
          setCreatedAt(post.createdAt);
          const date = format(post.createdAt, "dd MMM yyyy", { locale: ptBR });
          setFormatedDate(date);
          setLoading(false);
        } else {
          if ("message" in response) {
            setLoading(false);
            toast.error("Post não encontrado, redirecionando...");
            setTimeout(() => {
              router.push("/blog");
            }, 2000);
          } else {
            setLoading(false);
            toast.error("Erro ao buscar post");

            setTimeout(() => {
              router.push("/blog");
            }, 2000);
          }
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
        toast.error("Erro ao buscar post");
        setTimeout(() => {
          router.push("/blog");
        }, 2000);
      }
    };

    fetchPost();
  }, [router, slug]);

  const verifyImageUrl = async (url: string) => {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      try {
        const response = await fetch(url, { method: "HEAD" });
        if (response.ok) {
          return url;
        }
      } catch (error) {
        console.error("Erro ao verificar a URL da imagem:", error);
      }
    }
    return undefined;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Navbar />
      <div className="mt-28 max-w-6xl w-full">
        <Navbar />
        <div className="flex flex-col">
          <Button
            className="max-w-fit items-center flex flex-row gap-2"
            onClick={() => router.back()}
          >
            <CircleArrowLeft size={20} />
            Voltar
          </Button>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <GradientTitle className="text-foreground text-6xl mt-4 py-1">
                {title}
              </GradientTitle>
              <p className="text-md">{simpleDescription}</p>
            </div>

            <div className="flex flex-row gap-3 items-center">
              <span className="text-primary">
                <span className="font-bold">{formatedDate} - Equipe Flyra</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {imageUrl && (
                <AspectRatio
                  ratio={16 / 9}
                  className={cn(
                    "bg-muted rounded-md border border-border ",
                    imageUrl ? "block" : "hidden",
                  )}
                >
                  <Image
                    src={imageUrl}
                    alt="Capa do Post (imagem)"
                    fill
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              )}
              <Separator />
              <div className="bn-container">
                <div
                  className="bn-default-styles"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
