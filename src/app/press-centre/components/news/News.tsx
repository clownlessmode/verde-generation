import React from "react";
import css from "./News.module.scss";
import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";
import Link from "next/link";
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
  const news = await fetchQuery(api.news.listNews);
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="Пресс-Центр" page="Новости" />
      <div className={css.newsitems}>
        {news.map((item, index) => (
          <div className={css.newsitem} key={index}>
            <div
              className={css.imageWrapper}
              style={{
                backgroundImage: `url("${item.image}")`,
              }}
            >
              <p className={css.date}>{formatDate(item._creationTime)}</p>
            </div>
            <p className={css.newsdesc}>{item.title}</p>
            <Link href={`/press-centre/news/${item._id}`}>
              <Button
                variant={"default"}
                size={"default"}
                className="gap-2 items-center"
              >
                Подробнее
                <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
