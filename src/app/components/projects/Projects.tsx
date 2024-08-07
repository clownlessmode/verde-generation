import * as React from "react";
import { fetchQuery } from "convex/nextjs";
import css from "./Projects.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../../../convex/_generated/api";

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
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates?: Dates[];
  stats: Stats[];
}

export async function Projects() {
  const projects: Project[] = await fetchQuery(api.projects.listProjects);
  return (
    <section className={css.wrapper}>
      <Carousel className="w-full max-w-[1280px] " orientation="horizontal">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <Link
                href={`/projects/${item._id}`}
                className={css.sides}
                key={index}
              >
                <div className={css.side}>
                  <div className={css.header}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <Image
                    src={item.mainImage}
                    alt=""
                    width={629}
                    height={601}
                    className={css.mainImage}
                  />
                </div>
                <div className={css.side}>
                  <div className={css.aboutProjectHeader}>
                    <Image
                      src={item.subImage}
                      alt=""
                      width={640}
                      height={396}
                      
                      className={css.subImage}
                    />
                    {item.title === "Volga Gas" && item.dates && (
                      <div className={css.dates}>
                        {item.dates.map((date, index) => (
                          <div className={css.date} key={index}>
                            <time
                              dateTime={date.timestart + " - " + date.timeend}
                            >
                              {date.timestart + " - " + date.timeend}
                            </time>
                            <p>{date.compnames}</p>
                            <p>{date.names}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={css.stats}>
                    {item.stats.map((stat, index) => (
                      <div key={index}>
                        <div className={css.statsItem}>
                          <h3>{stat.title}</h3>
                          <p>{stat.value}</p>
                        </div>
                        {index < item.stats.length - 1 && (
                          <div className={css.separator} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className={css.arrows}>
          <CarouselPrevious className="bg-[#2e8b57]" />
          <CarouselNext className="bg-[#2e8b57]" />
        </div>
      </Carousel>
    </section>
  );
}
