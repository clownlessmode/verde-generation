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

const Gallery = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="Пресс-Центр" page="Фотогалерея" />
      <div className={css.content}>
        <h1>Наше производство</h1>
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
