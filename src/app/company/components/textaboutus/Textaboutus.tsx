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
          Компания <span>Verde</span> является оператором управления активами в
          нефтегазовой отрасли. Наша команда специализируется на разработке и
          эксплуатации месторождений, управлении материальными активами,
          внедрении инновационных технологий, а также на обеспечении
          экологической и социальной ответственности. На данный момент команда
          Verde имеет 3 офиса: г. Москва, г. Саратов и г. Инта (Республика
          Коми). 
        </h1>
      </div>
      <div>
        <p>Основные направления нашей деятельности:</p>
        <ul>
          <li>
            <div className={css.circle} />
            <p>Разработка и эксплуатация месторождений</p>
          </li>
          <li>
            <div className={css.circle} />
            <p>Управление материальными активами</p>
          </li>
          <li>
            <div className={css.circle} />
            <p>Инновационные технологии</p>
          </li>
          <li>
            <div className={css.circle} />
            <p>Экологическая и социальная ответственность</p>
          </li>
        </ul>
      </div>
      <Image
        alt=""
        src={"/assets/aboutus/aboutus.jpg"}
        height={894}
        width={1280}
        className={css.imageMain}
      /> 
    </section>
  );
};

export default Textaboutus;
