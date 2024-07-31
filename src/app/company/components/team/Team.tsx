import React from "react";
import css from "./Team.module.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";

const Textaboutus = () => {
  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="О компании" page="Команда" />
      <div className={css.teamwrapper}>
        <div className={css.teammember}>
          <Image
            alt=""
            src={"/assets/company/team/team.png"}
            height={411}
            width={411}
          />
          <div className={css.teammembertext}>
            <h1>Новый Айфончик Тонировкович</h1>
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
            <h1>Новый Айфончик Тонировкович</h1>
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
            <h1>Новый Айфончик Тонировкович</h1>
            <p>Президент ООО «Попперс»</p>
            <div className={css.line} />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Textaboutus;
