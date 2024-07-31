import * as React from "react";
import css from "./Projects.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
interface Dates {
  timestart: string;
  timeend: string;
  names: string;
}
interface Stats {
  stocks: string;
  gasProduction: string;
  oilProduction: string;
  spbt: string;
  dividents: string;
  team: string;
  newWells: string;
  payback: string;
}
interface Project {
  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates: Dates[];
  stats: Stats;
}
const projects: Project[] = [
  {
    title: "Volga Gas",
    description:
      "Проект демонстрировал впечатляющие результаты: 20 млн баррелей запасов, суточная добыча до 1 млн м³ газа и 500 тонн нефти. Проект приносил до 17 млн долларов дивидендов в год. 250 специалистов управляли 40 скважинами.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    dates: [
      {
        timestart: "2015",
        timeend: "2021",
        names: "Baring Vostok, Mike Calve, Alex Kalinin",
      },
      {
        timestart: "2015",
        timeend: "2021",
        names: "Baring Vostok, Mike Calve, Alex Kalinin",
      },
    ],
    stats: {
      stocks: "20 МЛН баррелей НЭ",
      gasProduction: "До 1 МЛН м3/сутки",
      oilProduction: "До 500 тонн/сутки",
      spbt: "До 100 тонн/сутки",
      dividents: "До 17 МЛН долларов/год",
      team: "250 человек",
      newWells: "40",
      payback: "менее 2 лет",
    },
  },
  {
    title: "Volga Gas",
    description:
      "Проект демонстрировал впечатляющие результаты: 20 млн баррелей запасов, суточная добыча до 1 млн м³ газа и 500 тонн нефти. Проект приносил до 17 млн долларов дивидендов в год. 250 специалистов управляли 40 скважинами.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    dates: [
      {
        timestart: "2015",
        timeend: "2021",
        names: "Baring Vostok, Mike Calve, Alex Kalinin",
      },
      {
        timestart: "2015",
        timeend: "2021",
        names: "Baring Vostok, Mike Calve, Alex Kalinin",
      },
    ],
    stats: {
      stocks: "20 МЛН баррелей НЭ",
      gasProduction: "До 1 МЛН м3/сутки",
      oilProduction: "До 500 тонн/сутки",
      spbt: "До 100 тонн/сутки",
      dividents: "До 17 МЛН долларов/год",
      team: "250 человек",
      newWells: "40",
      payback: "менее 2 лет",
    },
  },
  {
    title: "Volga Gas",
    description:
      "Проект демонстрировал впечатляющие результаты: 20 млн баррелей запасов, суточная добыча до 1 млн м³ газа и 500 тонн нефти. Проект приносил до 17 млн долларов дивидендов в год. 250 специалистов управляли 40 скважинами.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    dates: [
      {
        timestart: "2015",
        timeend: "2021",
        names: "Baring Vostok, Mike Calve, Alex Kalinin",
      },
      {
        timestart: "2015",
        timeend: "2021",
        names: "Baring Vostok, Mike Calve, Alex Kalinin",
      },
    ],
    stats: {
      stocks: "20 МЛН баррелей НЭ",
      gasProduction: "До 1 МЛН м3/сутки",
      oilProduction: "До 500 тонн/сутки",
      spbt: "До 100 тонн/сутки",
      dividents: "До 17 МЛН долларов/год",
      team: "250 человек",
      newWells: "40",
      payback: "менее 2 лет",
    },
  },
];

export function Projects() {
  return (
    <section className={css.wrapper}>
      <Carousel className="w-full max-w-[1280px]" orientation="horizontal">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <div className={css.sides} key={index}>
                <div className={css.side}>
                  <div className={css.header}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <Image src={item.mainImage} alt="" width={629} height={601} />
                </div>
                <div className={css.side}>
                  <div className={css.aboutProjectHeader}>
                    <Image
                      src={item.subImage}
                      alt=""
                      width={640}
                      height={396}
                    />
                    <div className={css.dates}>
                      {item.dates.map((item, index) => (
                        <div className={css.date} key={index}>
                          <time
                            dateTime={item.timestart + " - " + item.timeend}
                          >
                            {item.timestart + " - " + item.timeend}
                          </time>
                          <p>{item.names}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={css.stats}>
                    <div className={css.statsItem}>
                      <h3>Запасы</h3>
                      <p>{item.stats.stocks}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Добыча газа</h3>
                      <p>{item.stats.gasProduction}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Добыча нефти</h3>
                      <p>{item.stats.oilProduction}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Установка СПБТ</h3>
                      <p>{item.stats.spbt}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Дивиденды</h3>
                      <p>{item.stats.dividents}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Команда</h3>
                      <p>{item.stats.team}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Новых скважин</h3>
                      <p>{item.stats.newWells}</p>
                    </div>
                    <div className={css.separator} />
                    <div className={css.statsItem}>
                      <h3>Окупаемость проекта</h3>
                      <p>{item.stats.payback}</p>
                    </div>
                    <div className={css.separator} />
                  </div>
                </div>
              </div>
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
