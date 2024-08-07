import React from "react";
import css from "./Team.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Team {
  office: string;
  persons: Person[];
}

interface Person {
  name: string;
  position: string;
  image: string;
}

const Textaboutus = () => {
  const team: Team[] = [
    {
      office: "Офис Москва",
      persons: [
        {
          image: "/assets/company/team/Зозуля Андрей Викторович, СЕО.jpg",
          name: "Зозуля Андрей Викторович",
          position: "СЕО",
        },
        {
          image:
            "/assets/company/team/Ким Надежда Александровна, Главный бухгалтер.jpg",
          name: "Ким Надежда Александровна",
          position: "Главный бухгалтер",
        },

        {
          image:
            "/assets/company/team/Вишняков Денис Александрович, Бизнес-ассистент.jpg",
          name: "Вишняков Денис Александрович",
          position: "Бизнес-ассистент",
        },
        {
          image:
            "/assets/company/team/Рубан Константин Юрьевич, Технический директор.jpg",
          name: "Рубан Константин Юрьевич",
          position: "Технический директор",
        },
        {
          image:
            "/assets/company/team/Карпухин Сергей Михайлович, Директор по геологоразведке.jpg",
          name: "Карпухин Сергей Михайлович",
          position: "Директор по геологоразведке",
        },
        {
          image:
            "/assets/company/team/Перфилова Юлия Владимировна, Главный специалист по лицензированию и геологоразведке.jpg",
          name: "Перфилова Юлия Владимировна",
          position: "Главный специалист по лицензированию и геологоразведке",
        },
        {
          image:
            "/assets/company/team/Поляков Михаил Сергеевич, Ведущий геолог.jpg",
          name: "Поляков Михаил Сергеевич",
          position: "Ведущий геолог",
        },
        {
          image:
            "/assets/company/team/Осокин Степан Артемович, Ведущий аналитик данных ГИС.jpg",
          name: "Осокин Степан Артемович",
          position: "Ведущий аналитик данных ГИС",
        },
        {
          image:
            "/assets/company/team/Гаврилов Иван Петрович, Коммерческий директор.jpg",
          name: "Гаврилов Иван Петрович",
          position: "Коммерческий директор",
        },
        {
          image:
            "/assets/company/team/Чернявский Виктор Павлович, Ведущий инженер по бурению.jpg",
          name: "Чернявский Виктор Павлович",
          position: "Ведущий инженер по бурению",
        },
        {
          image:
            "/assets/company/team/Плотников Богдан Сергеевич, Ведущий геофизик.jpg",
          name: "Плотников Богдан Сергеевич",
          position: "Ведущий геофизик",
        },
        {
          image:
            "/assets/company/team/Виктор Викторович Балаба, Руководитель службы буровых растворов и цементирования скважин.jpg",
          name: "Балаба Виктор Викторович",
          position:
            "Руководитель службы буровых растворов и цементирования скважин",
        },
      ],
    },
  ];

  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="Команда" />
      <div className={css.Teams}>
        {team.map((item, index) => (
          <div className={css.team} key={index}>
            <h1>{item.office}</h1>
            <div className={css.teamwrapper}>
              {item.persons.map((item, index) => (
                <div className={css.teammember} key={index}>
                  <Image
                    alt=""
                    src={item.image}
                    height={411}
                    width={411}
                    className={cn(
                      "max-h-[590px] object-cover max-w-[411px]",
                      css.teamimage
                    )}
                  />
                  <div className={css.teammembertext}>
                    <h2>{item.name}</h2>
                    <p>{item.position}</p>
                    <div className={css.line} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Textaboutus;
