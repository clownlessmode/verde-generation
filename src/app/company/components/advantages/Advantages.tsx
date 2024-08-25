import React from "react";
import css from "./Advantages.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Atom,
  Bot,
  CircuitBoard,
  Cog,
  Factory,
  Users,
  Webhook,
  X,
} from "lucide-react";

interface advantagesItems {
  image: React.ReactNode;
  text: string;
  description: string | JSX.Element;
}

const advantagesItems: advantagesItems[] = [
  {
    image: <Cog color="#008080" size={200} />,
    text: "Cовременное оборудование и технологии",
    description:
      "Наше новейшее оборудование и технологии повышают эффективность работы и снижают воздействие на окружающую среду. Технология захвата и переработки факельного газа делает мир чище.",
  },
  {
    image: <Users color="#008080" size={200} />,
    text: "Специалисты высокого класса",
    description:
      "Высококвалифицированная эффективная команда с многолетним опытом в нефтегазовой промышленности гарантируют высокое качество и соблюдение сроков разработки и оптимизации месторождений углеводородного сырья.",
  },
  {
    image: <Webhook color="#008080" size={200} />,
    text: "Инновационные технологии бурения (Slim Drill)",
    description:
      "Используем технологии Slim Drill, что снижает затраты на бурение в 2-3 раза. Успешно пробурили 50 скважин.",
  },
  {
    image: <Atom color="#008080" size={200} />,
    text: "Эффективные процессы очистки газа (Redox)",
    description:
      "Процесс Redox эффективно очищает газ от H2S, снижая выбросы и энергопотребление при широких рабочих давлениях.",
  },
  {
    image: <CircuitBoard color="#008080" size={200} />,
    text: "Конверсия факельного газа в сжиженный газ (LPG)",
    description:
      "Наши проекты по конверсии факельного газа в LPG увеличивают КПД до 94%, окупая затраты менее чем за год.",
  },
  {
    image: <Bot color="#008080" size={200} />,
    text: "Внедрение искусственного интеллекта (AI Operator)",
    description:
      "Использование искусственного интеллекта для управления производством LPG повышает общую эффективность, контролируя десятки параметров одновременно.",
  },
  {
    image: <Factory color="#008080" size={200} />,
    text: "Мобильные и модульные решения для газовой инфраструктуры",
    description: (
      <>
        - Мобильные комплексы С3-С4 – новая технология на рынке; <br />-
        Мобильные комплексы СПГ – ниша факелов ПНГ.
      </>
    ),
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
            <div className={css.text}>
              <p className={css.header}>{item.text}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
