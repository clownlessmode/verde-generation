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
          image: "/assets/company/team/Zozulya.webp",
          name: "Зозуля Андрей Викторович",
          position: "СЕО",
        },
        {
          image: "/assets/company/team/Kim.webp",
          name: "Ким Надежда Александровна",
          position: "Финансовый директор",
        },
        {
          image: "/assets/company/team/Vishnyakov.webp",
          name: "Вишняков Денис Александрович",
          position: "Бизнес-ассистент",
        },
        {
          image: "/assets/company/team/Ruban.webp",
          name: "Рубан Константин Юрьевич",
          position: "Технический директор",
        },
        {
          image: "/assets/company/team/Karpukhin.webp",
          name: "Карпухин Сергей Михайлович",
          position: "Директор по геологоразведке",
        },
        {
          image: "/assets/company/team/Perfilova.webp",
          name: "Перфилова Юлия Владимировна",
          position: "Главный специалист по лицензированию и геологоразведке",
        },
        {
          image: "/assets/company/team/PolyakovMikhail.webp",
          name: "Поляков Михаил Сергеевич",
          position: "Ведущий геолог",
        },
        {
          image: "/assets/company/team/Osokin.webp",
          name: "Осокин Степан Артемович",
          position: "Ведущий аналитик данных ГИС",
        },
        {
          image: "/assets/company/team/Gavrilov.webp",
          name: "Гаврилов Иван Петрович",
          position: "Коммерческий директор",
        },
        {
          image: "/assets/company/team/Chernyavskiy.webp",
          name: "Чернявский Виктор Павлович",
          position: "Ведущий инженер по бурению",
        },
        {
          image: "/assets/company/team/Plotnikov.webp",
          name: "Плотников Богдан Сергеевич",
          position: "Ведущий геофизик",
        },
      ],
    },
    {
      office: "Саратов",
      persons: [
        {
          image: "/assets/company/team/Lyuchev.webp",
          name: "Лючев Владимир Ильич",
          position: "Главный энергетик",
        },
        {
          image: "/assets/company/team/Gorbunov.webp",
          name: "Горбунов Вадим Валерьевич",
          position: "Руководитель службы эксплуатации зданий и сооружений",
        },
        {
          image: "/assets/company/team/Balaba.webp",
          name: "Балаба Виктор Викторович",
          position: "Руководитель службы буровых растворов и цементирования скважин",
        },
        {
          image: "/assets/company/team/Enyutin.webp",
          name: "Лукин Андрей Иванович",
          position: "Инженер-технолог ТКРС",
        },
        {
          image: "/assets/company/team/Zhuchkov.webp",
          name: "Жучков Сергей Васильевич",
          position: "Главный инженер-механик",
        },
        {
          image: "/assets/company/team/Labykin.webp",
          name: "Лабыкин Данила Андреевич",
          position: "Руководитель отдела бурения",
        },
        {
          image: "/assets/company/team/Latysheva.webp",
          name: "Латышева Светлана Владимировна",
          position: "Ведущий специалист промышленной безопасности и охраны труда",
        },
        {
          image: "/assets/company/team/Malikova.webp",
          name: "Маликова Лилия Александровна",
          position: "Эколог",
        },
        {
          image: "/assets/company/team/Morozov.webp",
          name: "Морозов Михаил Владимирович",
          position: "Начальник отдела капитального строительства",
        },
        {
          image: "/assets/company/team/Orlov.webp",
          name: "Орлов Максим Александрович",
          position: "Руководитель отдела закупок",
        },
        {
          image: "/assets/company/team/PolyakovAlex.webp",
          name: "Поляков Александр Сергеевич",
          position: "Специалист по закупкам",
        },
        {
          image: "/assets/company/team/Sevostyanov.webp",
          name: "Севостьянов Михаил Геннадьевич",
          position: "Заместитель руководителя департамента правового сопровождения и комплаенса",
        },
        {
          image: "/assets/company/team/Serdobintseva.webp",
          name: "Сердобинцева Юлия Константиновна",
          position: "Заместитель главного бухгалтера",
        },
        {
          image: "/assets/company/team/Fedorova.webp",
          name: "Федорова Наталья Владимировна",
          position: "Руководитель департамента правового сопровождения и комплаенса",
        },
        {
          image: "/assets/company/team/Filippov.webp",
          name: "Филиппов Григорий Сергеевич",
          position: "Заместитель руководителя отдела закупок",
        },
        {
          image: "/assets/company/team/Churilin.webp",
          name: "Чурилин Дмитрий Валерьевич",
          position: "Ведущий юрист департамента правового сопровождения и комплаенса",
        },
        {
          image: "/assets/company/team/Sherbakov.webp",
          name: "Щербаков Илья Вадимович",
          position: "Заместитель генерального директора по бурению и КРС",
        },
      ],
    },
    {
      office: "Инта",
      persons: [
        {
          image: "/assets/company/team/Nikifirov.jpg",
          name: "Никифоров Александр Анатольевич",
          position: "Руководить отдела транспортной логистики",
        },
        {
          image: "/assets/company/team/Popova.jpg",
          name: "Попова Людмила Александровна",
          position: "Администратор офиса",
        },
        {
          image: "/assets/company/team/Shelomanov.jpg",
          name: "Шеломанов Виталий Викторович",
          position: "Заместитель начальника службы АМиС",
        },
        {
          image: "/assets/company/team/Sikidin.jpg",
          name: "Сикидин Никита Владимирович",
          position: "Механик",
        },
        {
          image: "/assets/company/team/Abramov.jpg",
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
