import React from "react";
import css from "./Advantages.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Atom, Bot, CircuitBoard, Cog, Users, Webhook, X } from "lucide-react";

interface advantagesItems {
  image: React.ReactNode;
  text: string;
}

const advantagesItems: advantagesItems[] = [
  {
    image: <Cog color="#008080" size={200} />,
    text: "Cовременное оборудование и технологии",
  },
  {
    image: <Users color="#008080" size={200} />,
    text: "Специалисты высокого класса",
  },
  {
    image: <Webhook color="#008080" size={200} />,
    text: "Инновационные технологии бурения (Slim Drill)",
  },
  {
    image: <Atom color="#008080" size={200} />,
    text: "Эффективные процессы очистки газа (Redox)",
  },
  {
    image: <CircuitBoard color="#008080" size={200} />,
    text: "Конверсия факельного газа в сжиженный газ (LPG)",
  },
  {
    image: <Bot color="#008080" size={200} />,
    text: "Внедрение искусственного интеллекта (AI Operator)",
  },
];

const Advantages = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="Преимущества" />
      <div className={css.content}>
        {advantagesItems.map((item, index) => (
          <div className={css.item} key={index}>
            {item.image}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
