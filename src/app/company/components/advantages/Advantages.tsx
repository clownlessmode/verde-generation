import React from "react";
import css from "./Advantages.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Advantages = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="Преимущества" />
      <Tabs
        defaultValue="slimdrill"
        className="w-[1280px] flex flex-row justify-between"
      >
        <TabsList className="flex flex-columm items-start justify-left bg-inherit gap-[23px] text-[#000000] text-wrap">
          <TabsTrigger
            value="techs"
            className="text-[24px]  text-wrap text-left"
          >
            Современное оборудование и технологии
          </TabsTrigger>
          <TabsTrigger
            value="slimdrill"
            className="text-[24px]  text-wrap text-left"
          >
            Инновационные технологии бурения (Slim Drill)
          </TabsTrigger>
          <TabsTrigger
            value="redox"
            className="text-[24px] text-wrap text-left"
          >
            Эффективные процессы очистки газа (Redox)
          </TabsTrigger>
          <TabsTrigger value="lpg" className="text-[24px]  text-wrap text-left">
            Конверсия факельного газа в сжиженный газ (LPG)
          </TabsTrigger>
          <TabsTrigger
            value="aioperator"
            className="text-[24px]  text-wrap text-left"
          >
            Внедрение искусственного интеллекта (AI Operator)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="techs">
          <Image
            alt=""
            src={"/assets/company/advantages/npz.png"}
            height={640}
            width={909}
            className="opacity-100"
          />
          Текст techs.
        </TabsContent>
        <TabsContent value="slimdrill" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
            className="bg-cover"
          />
          <p>
            Мы применяем инновационные технологии бурения, которые позволяют
            снижать затраты на бурение в 2-3 раза. Наш опыт включает успешное
            бурение 50 скважин с использованием метода Slim Drill.
          </p>
        </TabsContent>
        <TabsContent value="redox">Текст redox.</TabsContent>
        <TabsContent value="lpg">Текст lpg.</TabsContent>
        <TabsContent value="aioperator">Текст Ai Operator.</TabsContent>
      </Tabs>
    </section>
  );
};

export default Advantages;
