"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabss";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Id } from "../../../../convex/_generated/dataModel";

export default function Dashboard() {
  const projects = useQuery(api.projects.listProjects);

  // const router = useRouter();

  // useEffect(() => {
  //   const adminCookie = Cookies.get("admin");

  //   if (!adminCookie) {
  //     router.push("/admin/login");
  //   }
  // }, [router]);
  const Delete = useMutation(api.projects.deleteProject);
  const DeleteProject = async (id: Id<"projects">) => {
    await Delete({ id: id });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 pt-16">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="projects">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="projects">Проекты</TabsTrigger>
                <TabsTrigger value="news">Новости</TabsTrigger>
                <TabsTrigger value="gallery">Фотогаллерея</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="projects">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle className="gap-5 flex flex-row items-center">
                    Проекты
                    <Link href={"/"}>
                      <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Добавить проект
                        </span>
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[200px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead className="hidden w-[200px] sm:table-cell">
                          <span className="sr-only">Sub Image</span>
                        </TableHead>
                        <TableHead className="w-[200px]">Заголовок</TableHead>
                        <TableHead>Описание</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Характеристики
                        </TableHead>
                        <TableHead className="w-[100px]">
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects?.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="200"
                              src={item.mainImage}
                              width="200"
                            />
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="200"
                              src={item.subImage}
                              width="200"
                            />
                          </TableCell>
                          <TableCell className="font-medium text-[18px]">
                            {item.title}
                          </TableCell>
                          <TableCell className="max-w-[300px]">
                            {item.description}
                          </TableCell>
                          <TableCell className="max-w-40">
                            {item.stats.map((item, index) => (
                              <div
                                key={index}
                                className="flex flex-row justify-between"
                              >
                                <p className="font-semibold">{item.title}</p>
                                <p>{item.value}</p>
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Действия</DropdownMenuLabel>
                                <DropdownMenuItem>
                                  <Link href={`/projects/${item._id}`}>
                                    Перейти
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Link
                                    href={`/admin/projects/edit/${item._id}`}
                                  >
                                    Изменить
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => Delete({ id: item._id })}
                                  className="cursor-pointer"
                                >
                                  Удалить
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
