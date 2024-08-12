import React from "react";
import css from "./Gallery.module.scss";
import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Id } from "../../../../../convex/_generated/dataModel";

interface News {
  title: string;
  time: string;
}

const NewsItems: News[] = [
  {
    title: "Что то",
    time: "Октябрь 2023",
  },
  {
    title: "Что то",
    time: "Октябрь 2023",
  },
  {
    title: "Что то",
    time: "Октябрь 2023",
  },
  {
    title: "Что то",
    time: "Октябрь 2023",
  },
  {
    title: "Что то",
    time: "Октябрь 2023",
  },
  {
    title: "Что то",
    time: "Октябрь 2023",
  },
];
type GalleryData = {
  _id: Id<"gallery">;
  _creationTime: number;
  image: string;
  type: "life" | "production";
};

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

interface Project {
  _id: Id<"projects">;
  _creationTime: number;

  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates?: Dates[];
  stats: Stats[];
}

type Props = {
  galleryData: GalleryData[];
  projects: Project[];
};
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
const separateGalleryItems = (items: GalleryData[]) => {
  const lifeItems = items.filter((item) => item.type === "life");
  const productionItems = items.filter((item) => item.type === "production");

  return { lifeItems, productionItems };
};
const Gallery = ({ galleryData, projects }: Props) => {
  const { lifeItems, productionItems } = separateGalleryItems(galleryData);

  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="Пресс-Центр" page="Фотогалерея" />
      <div className={css.content}>
        <h1>Наше производство</h1>
        <Carousel className={css.carousel}>
          <CarouselContent>
            {productionItems.map((item, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <Link href={"#"} className={css.itemWrapper}>
                  <div
                    className={css.item}
                    style={{
                      backgroundImage: `
                            linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                            url(${item.image})
                            `,
                      backgroundSize: "auto, cover",
                      backgroundPosition: "center, center",
                      backgroundRepeat: "no-repeat, no-repeat",
                    }}
                  >
                    <div className={css.title}>
                      <time>{formatDate(item._creationTime)}</time>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className={css.arrows}>
            <CarouselPrevious className={cn("bg-[#2e8b57]")} />
            <CarouselNext className={cn("bg-[#2e8b57]")} />
          </div>
        </Carousel>
      </div>
      <div className={css.content}>
        <h1>Наша жизнь</h1>
        <Carousel className={css.carousel}>
          <CarouselContent>
            {lifeItems.map((item, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <Link href={"#"} className={css.itemWrapper}>
                  <div
                    className={css.item}
                    style={{
                      backgroundImage: `
                            linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                                        url(${item.image})
                            `,
                      backgroundSize: "auto, cover",
                      backgroundPosition: "center, center",
                      backgroundRepeat: "no-repeat, no-repeat",
                    }}
                  >
                    <div className={css.title}>
                      <time>{formatDate(item._creationTime)}</time>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className={css.arrows}>
            <CarouselPrevious className={cn("bg-[#2e8b57]")} />
            <CarouselNext className={cn("bg-[#2e8b57]")} />
          </div>
        </Carousel>
      </div>
      <div className={css.content}>
        <h1>Наши проекты</h1>
        <Carousel className={css.carousel}>
          <CarouselContent>
            {projects.map((item, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                <Link href={"#"} className={css.itemWrapper}>
                  <div
                    className={css.item}
                    style={{
                      backgroundImage: `
                            linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                            url(/assets/aboutus/npz.webp)
                            `,
                      backgroundSize: "auto, cover",
                      backgroundPosition: "center, center",
                      backgroundRepeat: "no-repeat, no-repeat",
                    }}
                  >
                    <div className={css.title}>
                      <h3>{item.title}</h3>
                      <time>{formatDate(item._creationTime)}</time>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className={css.arrows}>
            <CarouselPrevious className={cn("bg-[#2e8b57]")} />
            <CarouselNext className={cn("bg-[#2e8b57]")} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
