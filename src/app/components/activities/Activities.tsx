import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Activities.module.scss";
import { cn } from "@/lib/utils";

const Activities = () => {
  return (
    <section className={css.wrapper}>
      <h2>Управление активами под ключ</h2>
      <div className={css.allactivities}>
        <div className={cn(css.activity, css.one)}>
          <h3 className={css.activityhead}>Ликвидность</h3>
          <p className={css.activitydesc}>
            Высокая ликвидность актива: рост стоимости за счёт старта добычи до
            10 раз
          </p>
        </div>
        <div className={cn(css.activity, css.two)}>
          <h3 className={css.activityhead}>Безопасность</h3>
          <p className={css.activitydesc}>
            Лицензии имеют большие сроки действия до 50 лет
          </p>
        </div>
        <div className={cn(css.activity, css.three)}>
          <h3 className={css.activityhead}>Стартовые инвестиции</h3>
          <p className={css.activitydesc}>
            Инвестиции до выхода на самофинансирование
          </p>
        </div>
        <div className={cn(css.activity, css.four)}>
          <h3 className={css.activityhead}>Рентабельность</h3>
          <p className={css.activitydesc}>От 2-х до 4-х лет</p>
        </div>
      </div>
    </section>
  );
};

export default Activities;
