import React from "react";
import css from "./Textaboutus.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";

const Textaboutus = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="О нас" />
      <div>
        <h1>
          <span>Verde</span> – операторская компания полного цикла. Мы
          специализируемся на запуске и эксплуатации месторождений. Имеем три
          офиса: Москва, Саратов и Инта (Республика Коми).
        </h1>
      </div>
      <div>
        <p className={css.AboutUsP}>Основные направления нашей деятельности:</p>
        <ul>
          <li>
            <div className={css.circle} />
            <p>Геологоразведочные работы</p>
          </li>
          <li>
            <div className={css.circle} />
            <p>Ранний запуск добычи</p>
          </li>
          <li>
            <div className={css.circle} />
            <p>Эксплуатация месторождений</p>
          </li>
        </ul>
      </div>
      <Image
        alt=""
        src={"/assets/company/aboutus/aboutus.webp"}
        height={894}
        width={1280}
        className={css.imageMain}
      />
    </section>
  );
};

export default Textaboutus;
