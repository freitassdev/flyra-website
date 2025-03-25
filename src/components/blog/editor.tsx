"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { locales } from "@blocknote/core";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import "@blocknote/react/style.css";
import "./blocknote.css";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CircleArrowRight, LucidePlus } from "lucide-react";

export default function Editor() {
  const [html, setHtml] = useState<string>("");
  const [tags, setTags] = useState(["Programação", "React"]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const editor = useCreateBlockNote({
    dictionary: {
      ...locales.pt,
      placeholders: {
        default: "Digite seu texto ou use '/' para comandos",
        heading: "Título",
        bulletListItem: "Lista",
        numberedListItem: "Lista",
        checkListItem: "Lista",
      },
    },
    initialContent: [
      {
        type: "heading",
        props: { level: 2, textAlignment: "center" },
        content: "Um pequeno template para seu post 🔥",
      },
      {
        type: "paragraph",
        content: "Este este editor inclui as seguintes funcionalidades:",
      },
      {
        type: "bulletListItem",
        content: "Comandos de formatação de texto",
      },
      {
        type: "bulletListItem",
        content: "Organização intuitíva em blocos",
      },
      {
        type: "bulletListItem",
        content: "Suporte a tabelas, imagens, videos e áudios",
      },
      {
        type: "bulletListItem",
        content: "Códigos, syntax highlight e muito mais.",
      },
    ],
  });

  const handleChangeEditor = useCallback(async () => {
    const htmlCode = await editor.blocksToFullHTML(editor.document);
    setHtml(htmlCode);
  }, [editor, setHtml]);

  const handleNext = async () => {
    if (!title || !description || !html) {
      toast.error("Preencha todos os campos.");
      return;
    }

    if (tags.length === 0) {
      toast.error("Adicione pelo menos uma tag.");
      return;
    }

    if (title.length < 5 || title.length > 100) {
      toast.error("O título deve ter entre 5 e 100 caracteres.");
      return;
    }

    if (description.length < 10 || description.length > 200) {
      toast.error("A descrição deve ter entre 10 e 200 caracteres.");
      return;
    }

    if (imageUrl) {
      try {
        new URL(imageUrl);
        if (!imageUrl.match(/\.(jpeg|jpg|gif|png)$/i)) {
          toast.error("A URL da imagem deve ser válida.");
          return;
        }
      } catch {
        return toast.error("A URL da imagem deve ser válida.");
      }
    }

    if (html.length < 100) {
      toast.error("O conteúdo do post deve ter pelo menos 100 caracteres.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/blog/post/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content: html, //xss(html),
        imageUrl,
        simpleDescription: description,
        tags,
      }),
    });

    const response: {
      message: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any;
    } = await res.json();
    setLoading(false);

    if (res.ok && response.data) {
      toast.success("Post criado com sucesso! Redirecionando...");
      return setTimeout(() => {
        router.push(`/blog/post/${response.data.slug}`);
      }, 3000);
    }

    return toast.error(response.message); // caso tenha algum erro
  };

  useEffect(() => {
    if (tags.length > 8) {
      setTags(tags.slice(0, 8));
      toast.error("Máximo de 8 tags permitidas.");
    }
  }, [tags]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col gap-3 w-full">
          <Input
            maxLength={100}
            className="!text-4xl font-extrabold h-20"
            placeholder="Insira o título do post"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <Input
            maxLength={200}
            className="text-lg"
            placeholder="Insira uma descrição curta"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <div className="cursor-pointer hover:bg-card/80 transition-colors flex flex-col items-center justify-center w-full min-h-full max-w-[20%] rounded-md bg-card">
              <LucidePlus /> Adicionar Capa
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 border-border">
            <Label className="text-lg font-semibold text-primary">
              Capa do Post
            </Label>
            <Label className="text-sm font-normal text-muted-foreground">
              Esta imagem será exibida no início do post.
            </Label>
            <Input
              className="w-full"
              placeholder="Insira a URL da imagem"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.currentTarget.value)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Separator
        orientation="horizontal"
        className="w-[80%] h-[1px] bg-border mx-auto"
      />

      <div className="flex flex-col gap-3 mb-10">
        <BlockNoteView
          editor={editor}
          title="Novo Post"
          data-theming-css-variables-demo
          onChange={handleChangeEditor}
        />
        <Button
          onClick={() => handleNext()}
          className="ml-auto max-w-40 flex flex-row items-center gap-2"
          disabled={false}
        >
          {loading ? "Carregando..." : "Concluir"}{" "}
          <CircleArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}
