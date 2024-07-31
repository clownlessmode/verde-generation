import React from "react";
import css from "./Advantages.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Advantages = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="Преимущества" />
      <Tabs defaultValue="account" className="w-[400px] flex flex-row">
        <TabsList className="flex flex-columm bg-inherit gap-20 text-[#000000]">
          <TabsTrigger value="techs">
            Современное оборудование и технологии
          </TabsTrigger>
          <TabsTrigger value="slimdrill">
            Инновационные технологии бурения (Slim Drill)
          </TabsTrigger>
          <TabsTrigger value="redox">
            Эффективные процессы очистки газа (Redox)
          </TabsTrigger>
          <TabsTrigger value="lpg">
            Конверсия факельного газа в сжиженный газ (LPG)
          </TabsTrigger>
          <TabsTrigger value="aioperator">
            Внедрение искусственного интеллекта (AI Operator)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="techs">Текст techs.</TabsContent>
        <TabsContent value="slimdrill">
          Мы применяем инновационные технологии бурения, которые позволяют
          снижать затраты на бурение в 2-3 раза. Наш опыт включает успешное
          бурение 50 скважин с использованием метода Slim Drill.
        </TabsContent>
        <TabsContent value="redox">Текст redox.</TabsContent>
        <TabsContent value="lpg">Текст lpg.</TabsContent>
        <TabsContent value="aioperator">Текст Ai Operator.</TabsContent>
      </Tabs>
    </section>
  );
};

export default Advantages;
