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

const News = () => {
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
      <Carousel>
        <CarouselContent>
          {NewsItems.map((item, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
              <Link href={"#"} className={css.itemWrapper}>
                <div
                  className={css.item}
                  style={{
                    backgroundImage: `
                          linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                          url(/assets/aboutus/npz.jpg)
                        `,
                    backgroundSize: "auto, cover",
                    backgroundPosition: "center, center",
                    backgroundRepeat: "no-repeat, no-repeat",
                  }}
                >
                  <div className={css.title}>
                    <h3>{item.title}</h3>
                    <time dateTime={item.time}>{item.time}</time>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn("bg-[#2e8b57]", css.arrows)} />
        <CarouselNext className={cn("bg-[#2e8b57]", css.arrows)} />
      </Carousel>
    </div>
  );
};

export default News;
