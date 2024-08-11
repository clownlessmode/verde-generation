import React from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Map.module.scss";
import { Button } from "@/components/ui/button";
import Script from "next/script";

const Map = () => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.header}>Наши объекты</h2>
      <div className={css.content}>
        <Script
          type="text/javascript"
          charSet="utf-8"
          async
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6ecdcc020aaf5581715db1d903a465d2ec02ea8a37b753be5a15b55344c3411d&amp;width=518&amp;height=312&amp;lang=ru_RU&amp;scroll=true"
        ></Script>
      </div>
    </section>
  );
};

export default Map;
