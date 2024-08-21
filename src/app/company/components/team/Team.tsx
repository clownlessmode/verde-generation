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
      office: "Москва",
      persons: [
        {
          image: "/assets/company/team/Зозуля Андрей Викторович, СЕО.webp",
          name: "Зозуля Андрей Викторович",
          position: "СЕО",
        },
        {
          image:
            "/assets/company/team/Ким Надежда Александровна, Главный бухгалтер.webp",
          name: "Ким Надежда Александровна",
          position: "Главный бухгалтер",
        },
        {
          image:
            "/assets/company/team/Вишняков Денис Александрович, Бизнес-ассистент.webp",
          name: "Вишняков Денис Александрович",
          position: "Бизнес-ассистент",
        },
        {
          image:
            "/assets/company/team/Рубан Константин Юрьевич, Технический директор.webp",
          name: "Рубан Константин Юрьевич",
          position: "Технический директор",
        },
        {
          image:
            "/assets/company/team/Карпухин Сергей Михайлович, Директор по геологоразведке.webp",
          name: "Карпухин Сергей Михайлович",
          position: "Директор по геологоразведке",
        },
        {
          image:
            "/assets/company/team/Перфилова Юлия Владимировна, Главный специалист по лицензированию и геологоразведке.webp",
          name: "Перфилова Юлия Владимировна",
          position: "Главный специалист по лицензированию и геологоразведке",
        },
        {
          image:
            "/assets/company/team/Поляков Михаил Сергеевич, Ведущий геолог.webp",
          name: "Поляков Михаил Сергеевич",
          position: "Ведущий геолог",
        },
        {
          image:
            "/assets/company/team/Осокин Степан Артемович, Ведущий аналитик данных ГИС.webp",
          name: "Осокин Степан Артемович",
          position: "Ведущий аналитик данных ГИС",
        },
        {
          image:
            "/assets/company/team/Гаврилов Иван Петрович, Коммерческий директор.webp",
          name: "Гаврилов Иван Петрович",
          position: "Коммерческий директор",
        },
        {
          image:
            "/assets/company/team/Чернявский Виктор Павлович, Ведущий инженер по бурению.webp",
          name: "Чернявский Виктор Павлович",
          position: "Ведущий инженер по бурению",
        },
        {
          image:
            "/assets/company/team/Плотников Богдан Сергеевич, Ведущий геофизик.webp",
          name: "Плотников Богдан Сергеевич",
          position: "Ведущий геофизик",
        },
        {
          image:
            "/assets/company/team/Виктор Викторович Балаба, Руководитель службы буровых растворов и цементирования скважин.webp",
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
        {/* Отображаем название офиса "Москва" */}
        <div className={css.teammember} id={css.ceo}>
          <Image
            alt=""
            src={team[0].persons[0].image}
            height={411}
            width={411}
            className={cn(
              "max-h-[570px] object-cover max-w-[411px] rounded-sm",
              css.teamimage
            )}
          />
          <div className={css.teammembertext}>
            <h2>{team[0].persons[0].name}</h2>
            <p>{team[0].persons[0].position}</p>
            <div className={css.line} />
          </div>
        </div>
        <h1>{team[0].office}</h1>

        {/* Отображаем СЕО */}

        {/* Отображаем остальных сотрудников */}
        <div className={css.teamwrapper}>
          {team[0].persons.slice(1).map((person, index) => (
            <div className={css.teammember} key={index}>
              <Image
                alt=""
                src={person.image}
                height={411}
                width={411}
                className={cn(
                  "max-h-[570px] object-cover max-w-[411px] rounded-sm",
                  css.teamimage
                )}
              />
              <div className={css.teammembertext}>
                <h2>{person.name}</h2>
                <p>{person.position}</p>
                <div className={css.line} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Textaboutus;
