import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Hero.module.scss";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className={css.wrapper}>
      <h1>Verde: Комплексный Подход к Разработке Нефтегазовых Месторождений</h1>
      <div>
        <Button variant={"secondary"}>Связаться с нами</Button>
        <Link href="#">
          <Image alt="" src="/assets/Hero/arrow.svg" width={24} height={24} />
          <p>Узнать больше</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
