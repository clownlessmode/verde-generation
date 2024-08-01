import React from "react";
import css from "./Team.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";

const Textaboutus = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="Команда" />
      <div className={css.Teams}>
        <div className={css.team}>
          <h1>Офис Москва</h1>
          <div className={css.teamwrapper}>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Зозуля Андрей Викторович </h2>
                <p>СЕО</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Ким Надежда Александровна </h2>
                <p>Финансовый директор</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Вишняков Денис Александрович</h2>
                <p>Бизнес-ассистент</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Рубан Константин Юрьевич </h2>
                <p>Технический директор</p>
                <div className={css.line} />
              </div>
            </div>
          </div>
        </div>
        <div className={css.team}>
          <h1>Офис Саратов</h1>
          <div className={css.teamwrapper}>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Новый Айфончик Тонировкович</h2>
                <p>Президент ООО «Попперс»</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Новый Айфончик Тонировкович</h2>
                <p>Президент ООО «Попперс»</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Новый Айфончик Тонировкович</h2>
                <p>Президент ООО «Попперс»</p>
                <div className={css.line} />
              </div>
            </div>
          </div>
        </div>
        <div className={css.team}>
          <h1>Офис Инта</h1>
          <div className={css.teamwrapper}>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Новый Айфончик Тонировкович</h2>
                <p>Президент ООО «Попперс»</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Новый Айфончик Тонировкович</h2>
                <p>Президент ООО «Попперс»</p>
                <div className={css.line} />
              </div>
            </div>
            <div className={css.teammember}>
              <Image
                alt=""
                src={"/assets/company/team/team.png"}
                height={411}
                width={411}
              />
              <div className={css.teammembertext}>
                <h2>Новый Айфончик Тонировкович</h2>
                <p>Президент ООО «Попперс»</p>
                <div className={css.line} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Textaboutus;
