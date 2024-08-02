import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./AboutUs.module.scss";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.header}>О нашей компании</h2>
      <div className={css.content}>
        <div className={css.imageWrapper}>
          <Image
            alt=""
            src="/assets/aboutus/npz.jpg"
            layout="responsive"
            width={629}
            height={601}
            className={css.responsiveImage}
          />
        </div>
        <div className={css.alltext}>
          <div className={css.text}>
            <h2>О нашей компании</h2>
            <p>
              Компания Verde является оператором управления активами в
              нефтегазовой отрасли. Мы специализируемся на разработке и
              эксплуатации месторождений, управлении материальными активами,
              внедрении инновационных технологий, а также на обеспечении
              экологической и социальной ответственности.
            </p>
          </div>
          <div className={css.activity}>
            <h3>Основные направления нашей деятельности:</h3>
            <ul>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Разработка и эксплуатация месторожений
              </li>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Управление материальными активами
              </li>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Инновационные технологии
              </li>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Экологическая и социальная ответственность
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
