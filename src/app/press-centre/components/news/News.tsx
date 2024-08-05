import React from "react";
import css from "./News.module.scss";
import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const News = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="Пресс-Центр" page="Новости" />
      <div className={css.newsitems}>
        <div className={css.newsitem}>
          <div className={css.imageWrapper}>
            <p className={css.date}>Октябрь 2024</p>
          </div>
          <p className={css.newsdesc}>Зачем SHAMAN съел пёсика?</p>
          <Button className={css.button}>
            Подробнее
            <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className={css.newsitem}>
          <div className={css.imageWrapper}>
            <p className={css.date}>Октябрь 2024</p>
          </div>
          <p className={css.newsdesc}>Зачем SHAMAN съел пёсика?</p>
          <Button className={css.button}>
            Подробнее
            <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className={css.newsitem}>
          <div className={css.imageWrapper}>
            <p className={css.date}>Октябрь 2024</p>
          </div>
          <p className={css.newsdesc}>Зачем SHAMAN съел пёсика?</p>
          <Button className={css.button}>
            Подробнее
            <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className={css.newsitem}>
          <div className={css.imageWrapper}>
            <p className={css.date}>Октябрь 2024</p>
          </div>
          <p className={css.newsdesc}>Зачем SHAMAN съел пёсика?</p>
          <Button className={css.button}>
            Подробнее
            <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className={css.newsitem}>
          <div className={css.imageWrapper}>
            <p className={css.date}>Октябрь 2024</p>
          </div>
          <p className={css.newsdesc}>Зачем SHAMAN съел пёсика?</p>
          <Button className={css.button}>
            Подробнее
            <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className={css.newsitem}>
          <div className={css.imageWrapper}>
            <p className={css.date}>Октябрь 2024</p>
          </div>
          <p className={css.newsdesc}>Зачем SHAMAN съел пёсика?</p>
          <Button className={css.button}>
            Подробнее
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
