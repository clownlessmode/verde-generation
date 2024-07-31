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
          <AccordionContent className="text-[20px] leading-[158%] pl-[225px]">
            ООО «КНГК-ИНПЗ» (Ильинский НПЗ) - Современный производственный
            комплекс, входящий в число ведущих нефтеперерабатывающих заводов ЮФО
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mt-8">
          <AccordionTrigger>
            <div className={css.header}>
              <p>02</p>
              <h3>История</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[20px] leading-[158%] pl-[225px]">
            ООО «КНГК-ИНПЗ» (Ильинский НПЗ) - Современный производственный
            комплекс, входящий в число ведущих нефтеперерабатывающих заводов ЮФО
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mt-8 mb-8">
          <AccordionTrigger>
            <div className={css.header}>
              <p>03</p>
              <h3>Перспективы развития</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[20px] leading-[158%] pl-[225px]">
            sadsadasdas
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Company;
