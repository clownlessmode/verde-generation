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
        className={css.tabs}
      >
        <TabsList className={css.tabslist}>
          <TabsTrigger value="techs" className={css.Trigger}>
            Современное оборудование и технологии
          </TabsTrigger>
          <TabsTrigger value="hiclassspec" className={css.Trigger}>
            Специалисты высокого класса
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
            className={css.image}
          />
          <p>
            Наше новейшее оборудование и технологии повышают эффективность
            работы и снижают воздействие на окружающую среду. Технология захвата
            и переработки факельного газа делает мир чище.
          </p>
        </TabsContent>
        <TabsContent value="hiclassspec" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
            className={css.image}

          />
          <p>
            Высококвалифицированные специалисты с опытом в бурении и ремонте
            гарантируют высокое качество и соблюдение сроков.
          </p>
        </TabsContent>
        <TabsContent value="slimdrill" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
            className={css.image}

          />
          <p>
            Используем технологии Slim Drill, что снижает затраты на бурение в
            2-3 раза. Успешно пробурили 50 скважин.
          </p>
        </TabsContent>
        <TabsContent value="redox" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
            className={css.image}

          />
          <p>
            Процесс Redox эффективно очищает газ от H2S, снижая выбросы и
            энергопотребление при широких рабочих давлениях.
          </p>
        </TabsContent>
        <TabsContent value="lpg" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
            className={css.image}

          />
          <p>
            Наши проекты по конверсии факельного газа в LPG увеличивают КПД до
            94%, окупая затраты менее чем за год.
          </p>
        </TabsContent>
        <TabsContent value="aioperator" className={css.tabsContent}>
          <Image
            alt=""
            src={"/assets/company/advantages/image.png"}
            height={640}
            width={909}
            className={css.image}

          />
          <p>
            Использование искусственного интеллекта для управления производством
            LPG повышает общую эффективность, контролируя десятки параметров
            одновременно.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Advantages;
