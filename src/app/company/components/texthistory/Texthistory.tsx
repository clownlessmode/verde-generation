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
          Компания <span>Verde</span> начала деятельность в 2015 году и с тех
          пор совершенствуется в сфере энергетики. Первый крупный проект Volga
          Gas стал основой для успешного развития компании. После Volga Gas
          команда Verde приступила к более амбициозным инициативам, включая
          значимый проект ТПГК, который укрепил её репутацию и демонстрировал
          стабильный рост.
        </h1>
      </div>
      <div className={css.pwrapper}>
        <p>
          Под впечатлением от успехов, Verde занялась международным
          сотрудничеством, реализовав проект в Казахстане, который подтвердил её
          способность работать в различных условиях и утвердил её как надежного
          партнера. Также стоит отменить, что компания во всех проектах
          использует собственные инновационные технологии и постоянно улучшает
          производственные процессы.
        </p>
        <p>
          Таким образом, начиная с проекта Volga Gas, Verde достигла
          значительных успехов, укрепила свои позиции на рынке и создала крепкую
          основу для дальнейшего роста.
        </p>
      </div>
      <Image
        alt=""
        src={"/assets/company/aboutus/npz.webp"}
        height={894}
        width={1280}
        className={css.mainImage}
      />
    </section>
  );
};

export default Textaboutus;
