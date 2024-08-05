import React from "react";
import css from "./News.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
interface News {
  createdAt: number;
  _id: Id<"news">;
  _creationTime: number;
  title: string;
  image: string;
  main: string;
}
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
const News = async () => {
  const NewsItems: News[] = await fetchQuery(api.news.listNews);
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h2>Последние новости</h2>
        <Link href="/press-centre/news">
          <Button className="gap-[10px]">
            Смотреть все новости <ArrowUpRight size={16} />
          </Button>
        </Link>
      </div>
      <Carousel className={css.carousel}>
        <CarouselContent>
          {NewsItems.map((item, index) => (
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
                    <h3>{item.title}</h3>
                    <time dateTime={formatDate(item._creationTime)}>
                      {formatDate(item._creationTime)}
                    </time>
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
  );
};

export default News;
