"use client";

import React, { useState } from "react";
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
import Link from "next/link";

const Page = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [type, setType] = useState<"life" | "production" | undefined>(
    undefined
  );
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const createGalleryItem = useMutation(api.photogallery.createGalleryItem);
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
    if (type) {
      await createGalleryItem({
        type,
        image,
      });
      alert("Фотография добавлена");
      // Reset form fields
      setType(undefined);
      setImage("");
    } else {
      alert("Пожалуйста, выберите тип фотографии");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-20">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-row gap-4 items-center">
                <Link href={'/admin/dashboard'}>
                  <Button size="sm">Вернуться назад</Button>
                </Link>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Добавление фотографии
                </h1>
                <Badge variant="outline" className="ml-auto sm:ml-0">
                  Создание
                </Badge>
              </div>

              <Button size="sm" onClick={handleSave}>
                Сохранить
              </Button>
            </div>
            <div className="flex gap-4">
              <div className="max-w-[250px]">
                <Card x-chunk="dashboard-07-chunk-0" className="max-w-[250px]">
                  <CardHeader>
                    <CardTitle>Основные</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="type">Тип</Label>
                        <select
                          id="type"
                          className="w-full p-2 border rounded-md"
                          value={type}
                          onChange={(e) =>
                            setType(e.target.value as "life" | "production")
                          }
                        >
                          <option value="" disabled>
                            Выберите тип
                          </option>
                          <option value="life">Life</option>
                          <option value="production">Production</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-grow">
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Фото</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div
                        className="relative flex justify-center items-center hover:opacity-70 transition-all"
                        role="button"
                      >
                        <Image
                          alt="Gallery image"
                          className="aspect-square rounded-md object-cover h-[700px] w-[700px]"
                          height="700"
                          src={image || "/placeholder.svg"}
                          width="700"
                        />
                        <Upload className="h-4 w-4 text-muted-foreground absolute" />
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer h-[700px] w-[700px]"
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
