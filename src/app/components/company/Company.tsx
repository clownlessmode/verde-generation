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
            Компания Verde управляет активами в нефтегазовой отрасли с офисами в
            Москве, Саратове и Инте (Республика Коми). Мы занимаемся разработкой
            месторождений, управлением материальными активами, внедрением
            инноваций и обеспечением экологической и социальной ответственности.
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
            Компания Verde, начавшая деятельность в 2015 году с проекта
            VolgaGas, успешно реализовала проекты УралГаз и ТПКГ, укрепив свою
            репутацию. Международное сотрудничество в Казахстане подтвердило её
            надежность. Verde демонстрирует стабильный рост и инновации в
            энергетике.
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
            Компания Verde специализируется на бурении нефтяных и газовых
            скважин с оптимизацией затрат и сроков, обустройстве месторождений с
            сокращением затрат в 3-4 раза благодаря новым технологиям,
            разработке и реализации концепций полной утилизации углеводородного
            сырья, внедрении новых технологий сероочистки природного газа,
            цифровизации бизнес-процессов и привлечении финансирования для
            разработки малых и средних месторождений.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Company;
