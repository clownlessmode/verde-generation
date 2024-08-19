import React from "react";
import css from "./Company.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Company = () => {
  return (
    <section className={css.wrapper} id="company">
      <h2>Компания</h2>
      <Accordion type="multiple" className="">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className={css.header}>
              <p>01</p>
              <h3>О нас</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className={css.content}>
            Verde – операторская компания полного цикла. Мы специализируемся на
            запуске и эксплуатации месторождений. Имеем три офиса: Москва,
            Саратов и Инта (Республика Коми).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mt-8">
          <AccordionTrigger>
            <div className={css.header}>
              <p>02</p>
              <h3>История</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className={css.content}>
            Команда Verde начала свою деятельность с проекта Volga Gas (с 2015
            по 2021 год). После успешно реализованного проекта, мы получили
            лицензии на участки для проектов Пенза/Ульяновск, Узбекистан, ТПГК,
            УралГаз. В данный момент команда успешно реализовывает проект ТПГК в
            Республике Коми.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mt-8 mb-8">
          <AccordionTrigger>
            <div className={css.header}>
              <p>03</p>
              <h3>Компетенции</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className={css.content}>
            Используем собственные инновационные технологические подходы,
            которые позволяют нам снизить затраты на проекты в 2-3 раза.
            Благодаря эффективной работе команды компания снижает влияние на
            окружающую среду.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Company;
