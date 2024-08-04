"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "../../../../../convex/_generated/api";
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from "react-markdown";

// Dynamically import the Markdown editor
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const Page = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [main, setMain] = useState("");
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const createNews = useMutation(api.news.createNews);
  const { edgestore } = useEdgeStore();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: (url: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0); // Reset progress to 0 before starting the upload
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          setUploadProgress(progress);
          console.log(progress);
        },
      });
      setImage(res.url);
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    await createNews({
      title,
      image,
      main,
    });
    alert("Новость создана");
    // Reset form fields
    setTitle("");
    setMain("");
    setImage("");
  };

  const handleEditorChange = ({ text }: { text: string }) => {
    setMain(text);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-20">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-row gap-4 items-center">
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Добавление новости
                </h1>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                  Создание
                </Badge>
              </div>
              <Button size="sm" onClick={handleSave}>
                Сохранить
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Основные</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="title">Заголовок</Label>
                        <Input
                          id="title"
                          type="text"
                          className="w-full"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="main">Новость</Label>
                        <MdEditor
                          value={main}
                          style={{ height: "500px" }}
                          renderHTML={(text) => (
                            <ReactMarkdown>{text}</ReactMarkdown>
                          )}
                          onChange={handleEditorChange}
                          config={{
                            view: {
                              menu: true,
                              md: true,
                              html: true,
                            },
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Фото новости</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div
                        className="relative flex justify-center items-center hover:opacity-70 transition-all"
                        role="button"
                      >
                        <Image
                          alt="News image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src={image || "/placeholder.svg"}
                          width="300"
                        />
                        <Upload className="h-4 w-4 text-muted-foreground absolute" />
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer h-300"
                          onChange={(e) => handleImageUpload(e, setImage)}
                        />
                      </div>
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="relative w-full h-2 bg-gray-200 mt-2 text-black">
                          <div
                            className="absolute top-0 left-0 h-2 bg-black rounded-md"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
