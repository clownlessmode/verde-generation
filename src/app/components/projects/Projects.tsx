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
import Link from "next/link";
import { transliterate } from "@/lib/translicate";

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
  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates?: Dates[];
  stats: Stats[];
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
        compnames: "Baring Vostok",
        names: "Mike Calve, Alex Kalinin",
      },
      {
        timestart: "2021",
        timeend: "2022",
        compnames: "GEM Capital",
        names: "Анатолий Палий",
      },
    ],
    stats: [
      { title: "Запасы", value: "20 млн баррелей НЭ" },
      { title: "Добыча газа", value: "до 1 млн м3/сутки" },
      { title: "Добыча нефти", value: "до 500 тонн/сутки" },
      { title: "Установка СПБТ", value: "до 100 тонн/сутки" },
      { title: "Дивиденды", value: "до 17 млн долларов/год" },
      { title: "Команда", value: "250 человек" },
      { title: "Новых скважин", value: "40" },
      { title: "Окупаемость проектов", value: "менее 2 лет" },
    ],
  },
  {
    title: "ТПГК",
    description:
      "Проект представляет собой классический greenfield-проект в нефтегазовой отрасли, где на чистом участке земли начинается добыча ресурсов. Это уникальная возможность для инвесторов войти в проект на начальной стадии и получить высокую доходность по мере развития и масштабирования добычи. Потенциал данного проекта позволяет рассчитывать на значительные долгосрочные прибыли.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    stats: [
      { title: "С1-С2", value: "60 млрд м3" },
      { title: "С3, Д0", value: "300 млрд м3" },
      { title: "Количество лицензионных участков ", value: "13" },
      { title: "Запуск добычи ", value: "в 2025 году" },
      { title: "Добыча на старте", value: "500 млн м3/год" },
      { title: "Добыча 2027 ", value: "2000 млн м3/год" },
      { title: "Стартовые инвестиции", value: "1500 млн руб" },
      { title: "Окупаемость", value: "2.5 года" },
    ],
  },
  {
    title: "УралГаз",
    description:
      "Перспективный проект с высокой окупаемостью, который активно привлекает инвестиции для реализации. Его уникальные геологические условия и профессиональная команда гарантируют эффективное освоение месторождения. Инвесторы могут ожидать быструю отдачу и стабильный рост доходов.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    stats: [
      { title: "Ресурсы Д0", value: "30 млрд м3" },
      { title: "Запуск добычи", value: "в 2026 году" },
      { title: "Добыча на старте", value: "500 млн м3/год" },
      { title: "Добыча в 2027 году", value: "1000 млн м3/год" },
      { title: "Покупка актива", value: "10 млн рублей" },
      { title: "Стартовые инвестиции ", value: "2500 млн рублей" },
      { title: "Окупаемость ", value: "4 года" },
    ],
  },
  {
    title: "Ульяновск / Пенза",
    description:
      "В Ульяновске и Пензе приобретены лицензионные участки с богатыми ресурсами, представляющие собой отличный инвестиционный проект. Данные участки готовы к разработке и обещают значительные запасы нефти и газа, что обеспечивает привлекательные перспективы для инвесторов. Вложение в этот проект – это возможность стать частью быстро развивающейся добычи энергоресурсов в регионе.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    stats: [
      { title: "Ресурсы Д0 ", value: "5 млн тонн" },
      { title: "Стартовый дебит ", value: "25 тонн/сутки" },
      { title: "Дебит на полке ", value: "500 тонн/сутки" },
      { title: "Покупка актива ", value: "15 млн рублей" },
      { title: "Стартовые инвестиции ", value: "150 млн рублей" },
      { title: "Окупаемость ", value: "3 года" },
      { title: "Новых скважин", value: "32" },
      { title: "Возможность входа ", value: "Обсуждается" },
    ],
  },
  {
    title: "Узбекистан",
    description:
      "В Узбекистане приобретены стратегически важные лицензионные участки с богатыми ресурсами, что открывает новые горизонты для инвестиций. Регион обладает значительным потенциалом для добычи нефти и газа, и проект направлен на эффективное освоение этих ресурсов. Вклад в данный проект обеспечит инвесторам стабильный доход и участие в развитии одного из наиболее перспективных энергетических регионов.",
    mainImage: "/assets/aboutus/npz.jpg",
    subImage: "/assets/aboutus/npz.jpg",
    stats: [
      { title: "Количество лицензионных участков", value: "3" },
      { title: "Ресурсы Д0", value: "40 млрд м3" },
      { title: "Стартовая добыча", value: "100 млн м3" },
      { title: "Полка добычи", value: "1000 млн км3" },
      { title: "Покупка ЛУ", value: "60 млн рублей" },
      { title: "Стартовые инвестиции", value: "1000 млн рублей" },
      { title: "Окупаемость", value: "3 года" },
      { title: "Возможность входа", value: "обсуждается" },
    ],
  },
];

export function Projects() {
  return (
    <section className={css.wrapper}>
      <Carousel className="w-full max-w-[1280px]" orientation="horizontal">
        <CarouselContent>
          {projects.map((item, index) => (
            <CarouselItem key={index}>
              <Link
                href={transliterate(item.title)}
                className={css.sides}
                key={index}
              >
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
                    {item.title === "Volga Gas" && (
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
