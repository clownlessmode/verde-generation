import React from "react";
import css from "./Texthistory.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Textaboutus = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="История" />
      <div>
        <h1>
          Компания <span>Verde</span> начала деятельность в 2015 году и с тех
          пор совершенствуется в сфере энергетики. Первый крупный проект
          «VolgaGas» стал основой для успешного развития компании. После
          «VolgaGas» команда «Verde» приступила к более амбициозным инициативам,
          включая значимый проект «УралГаз», который укрепил её репутацию и
          демонстрировал стабильный рост.
        </h1>
      </div>
      <div className={css.pwrapper}>
        <p>
          Под впечатлением от успехов, Verde занялась международным
          сотрудничеством, реализовав проект в Казахстане, который подтвердил её
          способность работать в различных условиях и утвердил её как надежного
          партнера. Также стоит отметить проект ТПКГ, где Verde применила
          инновационные технологии и улучшила производственные процессы.
        </p>
        <p>
          Таким образом, начиная с проекта VolgaGas, Verde достигла
          значительных успехов, укрепила свои позиции на рынке и создала крепкую
          основу для дальнейшего роста.
        </p>
      </div>
    </section>
  );
};

export default Textaboutus;
