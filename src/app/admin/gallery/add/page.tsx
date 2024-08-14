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
import imageCompression from 'browser-image-compression'; // Импорт библиотеки для сжатия изображений

const Page = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [type, setType] = useState<"life" | "production">("life");
  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadCount, setUploadCount] = useState(0); // Количество загруженных изображений
  const [totalFiles, setTotalFiles] = useState(0); // Общее количество загружаемых файлов
  const [applyCompression, setApplyCompression] = useState(true); // Переключатель для включения/выключения сжатия
  const createGalleryItem = useMutation(api.photogallery.createGalleryItem);
  const { edgestore } = useEdgeStore();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      setIsUploading(true);
      setUploadProgress(0); // Сброс прогресса загрузки
      setUploadCount(0); // Сброс счетчика загруженных изображений
      setTotalFiles(files.length); // Установка общего количества файлов

      const uploadedImages: string[] = [];

      for (const file of Array.from(files)) {
        let fileToUpload = file;

        // Если сжатие включено, сжимаем изображение
        if (applyCompression) {
          fileToUpload = await imageCompression(file, {
            maxSizeMB: 5, // Максимальный размер файла в мегабайтах для лучшего качества
            maxWidthOrHeight: 1920, // Максимальная ширина или высота изображения
            useWebWorker: true, // Использование web worker для ускорения процесса
            initialQuality: 0.9, // Качество изображения (от 0 до 1)
          });
        }

        const res = await edgestore.publicFiles.upload({
          file: fileToUpload,
          onProgressChange: (progress) => {
            setUploadProgress(progress);
          },
        });
        uploadedImages.push(res.url);
        setImages((prevImages) => [...prevImages, res.url]); // Сразу добавляем изображение в массив для отображения
        setUploadCount((prevCount) => prevCount + 1); // Увеличение счетчика загруженных изображений
      }

      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    if (type && images.length > 0) {
      for (const image of images) {
        await createGalleryItem({
          type,
          image,
        });
      }
      alert(`Фотографии добавлены. Всего загружено: ${images.length}`);
      // Сброс полей формы
      setType("life");
      setImages([]);
      setUploadCount(0);
      setTotalFiles(0);
    } else {
      alert("Пожалуйста, выберите тип фотографии и загрузите хотя бы одну фотографию");
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
                          <option value="life">Наша Жизнь</option>
                          <option value="production">Наше производство</option>
                        </select>
                      </div>
                      <div className="flex items-center">
                        <Label htmlFor="compression-toggle">Сжатие изображений</Label>
                        <input
                          id="compression-toggle"
                          type="checkbox"
                          checked={applyCompression}
                          onChange={() => setApplyCompression(!applyCompression)}
                          className="ml-2"
                        />
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
                        {/* Отображение первой загруженной картинки или плейсхолдера */}
                        <Image
                          alt="Gallery image"
                          className="aspect-square rounded-md object-cover h-[700px] w-[700px]"
                          height="700"
                          src={images[0] || "/placeholder.svg"}
                          width="700"
                        />
                        <Upload className="h-4 w-4 text-muted-foreground absolute" />
                        <Input
                          type="file"
                          multiple // Позволяет выбрать несколько файлов
                          className="absolute inset-0 opacity-0 cursor-pointer h-[700px] w-[700px]"
                          onChange={handleImageUpload}
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
                    {/* Прогресс загрузки фотографий */}
                    <div className="mt-2">
                      {isUploading && totalFiles > 0 && (
                        <p>{`Загружено ${uploadCount} из ${totalFiles} фотографий`}</p>
                      )}
                      {!isUploading && uploadCount > 0 && (
                        <p>{`Все фотографии загружены. Всего: ${uploadCount}`}</p>
                      )}
                    </div>
                    {/* Отображение всех загруженных картинок */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {images.map((img, index) => (
                        <Image
                          key={index}
                          alt={`Uploaded image ${index + 1}`}
                          className="aspect-square rounded-md object-cover h-[200px] w-[200px]"
                          height="200"
                          src={img}
                          width="200"
                        />
                      ))}
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
