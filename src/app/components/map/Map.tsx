"use client";
import React, { useEffect, useRef } from "react";
import css from "./Map.module.scss";

const Map = () => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.header}>Наши объекты</h2>
      <div className={css.content}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6ecdcc020aaf5581715db1d903a465d2ec02ea8a37b753be5a15b55344c3411d&amp;source=constructor"
          width="960"
          height="628"
          frameBorder="0"
          style={{ width: "100%", height: "600px", border: "non" }}
          onMouseEnter={() => (document.body.style.overflow = "hidden")}
          onMouseLeave={() => (document.body.style.overflow = "auto")}
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
