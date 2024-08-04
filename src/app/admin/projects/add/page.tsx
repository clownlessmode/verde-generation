"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PlusCircle, Upload, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "convex/react";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "react-toastify";

interface Dates {
  timestart: string;
  timeend: string;
  compnames: string;
  names: string;
}

interface Stats {
  title: string;
  value: string;
}

const Page = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [subImage, setSubImage] = useState("");
  const [stats, setStats] = useState<Stats[]>([{ title: "", value: "" }]);
  const [isUploading, setIsUploading] = useState(false);
  const createProject = useMutation(api.projects.createProject);
  const { edgestore } = useEdgeStore();

  const addStat = () => {
    setStats([...stats, { title: "", value: "" }]);
  };

  const deleteStat = (index: number) => {
    const newStats = [...stats];
    newStats.splice(index, 1);
    setStats(newStats);
  };

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
    await createProject({
      title,
      description,
      mainImage,
      subImage,
      stats,
    });
    alert("Проект создан")
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-20">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4 justify-between">
              <div className="flex flex-row gap-4 items-center">
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Новый проект
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
                        <Label htmlFor="name">Заголовок</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Описание</Label>
                        <Textarea
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="min-h-32"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Характеристики</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50%]">
                            Наименование
                          </TableHead>
                          <TableHead className="w-full">Значение</TableHead>
                          <TableHead className="w-[5px] sr-only">
                            Удалить
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stats.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-semibold">
                              <Input
                                id={`title-${index}`}
                                type="text"
                                value={item.title}
                                onChange={(e) => {
                                  const newStats = [...stats];
                                  newStats[index].title = e.target.value;
                                  setStats(newStats);
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Label
                                htmlFor={`value-${index}`}
                                className="sr-only"
                              >
                                Value
                              </Label>
                              <Input
                                id={`value-${index}`}
                                type="text"
                                value={item.value}
                                onChange={(e) => {
                                  const newStats = [...stats];
                                  newStats[index].value = e.target.value;
                                  setStats(newStats);
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="gap-1"
                                onClick={() => deleteStat(index)}
                              >
                                <X className="h-3.5 w-3.5" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1"
                      onClick={addStat}
                    >
                      <PlusCircle className="h-3.5 w-3.5" />
                      Добавить характеристику
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card
                  className="overflow-hidden"
                  x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Изображения проекта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div
                        className="relative flex justify-center items-center hover:opacity-70 transition-all"
                        role="button"
                      >
                        <Image
                          alt="Main image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src={mainImage || "/placeholder.svg"}
                          width="300"
                        />
                        <Upload className="h-4 w-4 text-muted-foreground absolute" />
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer h-300"
                          onChange={(e) => handleImageUpload(e, setMainImage)}
                        />
                      </div>
                      <div
                        className="relative flex justify-center items-center hover:opacity-70 transition-all"
                        role="button"
                      >
                        <Image
                          alt="Sub image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src={subImage || "/placeholder.svg"}
                          width="300"
                        />
                        <Upload className="h-4 w-4 text-muted-foreground absolute" />
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer h-300"
                          onChange={(e) => handleImageUpload(e, setSubImage)}
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
