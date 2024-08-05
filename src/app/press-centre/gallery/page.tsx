import React from "react";
import Gallery from "@/app/press-centre/components/gallery/Gallery";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

const formatDate = (dateString: number) => {
  const date = new Date(dateString);
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

type GalleryData = {
  _id: Id<"gallery">;
  _creationTime: number;
  image: string;
  type: "life" | "production";
};

const page = async () => {
  const galleryData: GalleryData[] = await fetchQuery(
    api.photogallery.listGalleryItems
  );
  const projects = await fetchQuery(api.projects.listProjects);

  return (
    <main className="flex flex-col gap-10 justify-center items-center">
      <Gallery galleryData={galleryData} projects={projects} />
    </main>
  );
};

export default page;
