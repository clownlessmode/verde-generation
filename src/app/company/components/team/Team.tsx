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
    {
      office: "Саратов",
      persons: [
        {
          image:
            "/assets/company/team/Лючев Владимир Ильич, Главный энергетик.webp",
          name: "Лючев Владимир Ильич",
          position: "Главный энергетик",
        },
        {
          image:
            "/assets/company/team/Горбунов Вадим Валерьевич, Руководитель службы эксплуатации зданий и сооружений.webp",
          name: "Горбунов Вадим Валерьевич",
          position: "Руководитель службы эксплуатации зданий и сооружений",
        },
        {
          image:
            "/assets/company/team/Енютин Иван Михайлович, Заместитель руководителя проекта.webp",
          name: "Енютин Иван Михайлович",
          position: "Заместитель руководителя проекта",
        },
        {
          image:
            "/assets/company/team/Жучков Сергей Васильевич, Главный инженер-механик.webp",
          name: "Жучков Сергей Васильевич",
          position: "Главный инженер-механик",
        },
        {
          image:
            "/assets/company/team/Лабыкин Данила Андреевич, Руководитель отдела бурения.webp",
          name: "Лабыкин Данила Андреевич",
          position: "Руководитель отдела бурения",
        },
        {
          image:
            "/assets/company/team/Латышева Светлана Владимировна, Ведущий специалист промышленной безопасности и охраны труда.webp",
          name: "Латышева Светлана Владимировна",
          position:
            "Ведущий специалист промышленной безопасности и охраны труда",
        },
        {
          image:
            "/assets/company/team/Маликова Лилия Александровна, Эколог.webp",
          name: "Маликова Лилия Александровна",
          position: "Эколог",
        },
        {
          image:
            "/assets/company/team/Морозов Михаил Владимирович, Начальник отдела капитального строительства.webp",
          name: "Морозов Михаил Владимирович",
          position: "Начальник отдела капитального строительства",
        },

        {
          image:
            "/assets/company/team/Орлов Максим Александрович, Руководитель отдела закупок.webp",
          name: "Орлов Максим Александрович",
          position: "Руководитель отдела закупок",
        },
        {
          image:
            "/assets/company/team/Поляков Александр Сергеевич, Специалист по закупкам.webp",
          name: "Поляков Александр Сергеевич",
          position: "Специалист по закупкам",
        },
        {
          image:
            "/assets/company/team/Севостьянов Михаил Геннадьевич, Заместитель руководителя департамента правового сопровождения и комплаенса.webp",
          name: "Севостьянов Михаил Геннадьевич",
          position:
            "Заместитель руководителя департамента правового сопровождения и комплаенса",
        },
        {
          image:
            "/assets/company/team/Сердобинцева Юлия Констатиновна, Заместитель главного бухгалтера.webp",
          name: "Сердобинцева Юлия Констатиновна",
          position: "Заместитель главного бухгалтера",
        },
        {
          image:
            "/assets/company/team/Федорова Наталья Владимировна, Руководитель департамента правового сопровождения и комплаенса.webp",
          name: "Федорова Наталья Владимировна",
          position:
            "Руководитель департамента правового сопровождения и комплаенса",
        },
        {
          image:
            "/assets/company/team/Филиппов Григорий Сергеевич, Заместитель руководителя отдела закупок.webp",
          name: "Филиппов Григорий Сергеевич",
          position: "Заместитель руководителя отдела закупок",
        },

        {
          image:
            "/assets/company/team/Чурилин Дмитрий Валерьевич, Ведущий юрист департамента правового сопровождения и комплаенса.webp",
          name: "Чурилин Дмитрий Валерьевич,",
          position:
            "Ведущий юрист департамента правового сопровождения и комплаенса",
        },
        {
          image:
            "/assets/company/team/Щербаков Илья Вадимович, Заместитель генерального директора по бурению ИКРС.webp",
          name: "Щербаков Илья Вадимович",
          position: "Заместитель генерального директора по бурению ИКРС",
        },
        {
          image:
            "/assets/company/team/Щукина Оксана Владимировна, Руководитель отдела кадров.webp",
          name: "Щукина Оксана Владимировна",
          position: "Руководитель отдела кадров",
        },
      ],
    },
    {
      office: "Инта",
      persons: [
   
        {
          image: "/assets/company/team/Никифоров А.А.jpg",
          name: "Никифоров А.А",
          position: "----",
        },
        {
          image: "/assets/company/team/Попова Людмила Александровна, Администратор офиса.jpg",
          name: "Попова Людмила Александровна",
          position: "Администратор офиса",
        },
        {
          image: "/assets/company/team/Шеломанов Виталий Викторович, Заместитель начальника службы АМиС.jpg",
          name: "Шеломанов Виталий Викторович",
          position: "Заместитель начальника службы АМиС",
        },
        {
          image: "/assets/company/team/Сикидин Никита Владимирович, Механик.jpg",
          name: "Сикидин Никита Владимирович",
          position: "Механик",
        },
        {
          image: "/assets/company/team/Абрамов Артем Олегович, Главный механик.jpg",
          name: "Абрамов Артем Олегович",
          position: "Главный механик",
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
        <h1>{team[1].office}</h1>
        <div className={css.teamwrapper}>
          {team[1].persons.map((person, index) => (
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
        <h1>{team[2].office}</h1>
        <div className={css.teamwrapper}>
          {team[2].persons.map((person, index) => (
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
