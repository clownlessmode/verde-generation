import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./AboutUs.module.scss";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.header}>Основные направления нашей деятельности</h2>
      <div className={css.content}>
        <div className={css.imageWrapper}>
          <Image
            alt=""
            src="/assets/company/aboutus/3G3A0047.JPG"
            layout="responsive"
            width={629}
            height={601}
            className={css.responsiveImage}
          />
        </div>
        <div className={css.alltext}>
          <div className={css.text}>
            <h2>Основные направления нашей деятельности:</h2>
          </div>
          <div className={css.activity}>
            <ul>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Геологоразведочные работы
              </li>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Ранний запуск добычи
              </li>
              <li>
                <Image
                  alt=""
                  src="/assets/aboutus/li_check.svg"
                  height={13}
                  width={18}
                />
                Эксплуатация месторождений
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
