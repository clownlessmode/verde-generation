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
          <TabsTrigger value="techs" className={css.Trigger}>
            Современное оборудование и технологии
          </TabsTrigger>
          <TabsTrigger value="slimdrill" className={css.Trigger}>
            Инновационные технологии бурения (Slim Drill)
          </TabsTrigger>
          <TabsTrigger value="redox" className={css.Trigger}>
            Эффективные процессы очистки газа (Redox)
          </TabsTrigger>
          <TabsTrigger value="lpg" className={css.Trigger}>
            Конверсия факельного газа в сжиженный газ (LPG)
          </TabsTrigger>
          <TabsTrigger value="aioperator" className={css.Trigger}>
            Внедрение искусственного интеллекта (AI Operator)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="techs" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
          />
          <p>Текст techs.</p>
        </TabsContent>
        <TabsContent value="slimdrill" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
          />
          <p>
            Мы применяем инновационные технологии бурения, которые позволяют
            снижать затраты на бурение в 2-3 раза. Наш опыт включает успешное
            бурение 50 скважин с использованием метода Slim Drill.
          </p>
        </TabsContent>
        <TabsContent value="redox" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
          />
          <p>Текст redox.</p>
        </TabsContent>
        <TabsContent value="lpg" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
          />
          <p>Текст lpg.</p>
        </TabsContent>
        <TabsContent value="aioperator" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
          />
          <p>Текст Ai Operator.</p>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Advantages;
