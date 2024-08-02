import React from "react";
import css from "./News.module.scss";
import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const News = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="Пресс-Центр" page="Новости" />
      <div className={css.newsitem}>
        <div className={css.imageWrapper}>
          <Image
            alt=""
            src="/assets/press-centre/news-photo.png"
            width={281}
            height={374}
          />
          <p>Октябрь 2024</p>
        </div>
        <p className={css.newsdesc}>
          SHAMAN СОБАЧКУ СКУУУУШАЛ ЗАЧЕМ ОН ТАК СДЕЛАЛ
        </p>
        <Button>
          Подробнее
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </section>
  );
};

export default News;
