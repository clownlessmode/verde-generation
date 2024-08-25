import React from "react";
import css from "./Texthistory.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";

const Textaboutus = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="История" />
      <div>
        <h1>
          Команда <span>Verde</span> начала свою деятельность с проекта Volga
          Gas (с 2015 по 2021 год). После успешно реализованного проекта, мы
          получили лицензии на участки для проектов Пенза/Ульяновск, Узбекистан,
          ТПГК, УралГаз.
        </h1>
      </div>
      <div className={css.pwrapper}>
        <p>
          Наша команда расширила горизонты, запустив международный проект в
          Казахстане, который подтвердил нашу способность эффективно работать в
          различных условиях и утвердил нашу репутацию как надежного партнера.
          Важно отметить, что во всех проектах наша компания использует
          собственные инновационные технологии, постоянно совершенствуя
          технологические процессы.
        </p>
        <p>
          Таким образом, начиная с проекта Volga Gas, Verde достигла
          значительных успехов, укрепила свои позиции на рынке и заложила
          прочную основу для дальнейшего роста.
        </p>
      </div>
      <Image
        alt=""
        src={"/assets/company/aboutus/Фото в подраздел История.jpg"}
        height={894}
        width={1280}
        className={css.mainImage}
      />
    </section>
  );
};

export default Textaboutus;
