"use client";
import React, { useEffect, useRef } from "react";
import css from "./Map.module.scss";

const Map = () => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.header}>Наши объекты</h2>
      <div className={css.content}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A82f0109a3212e14bca7202b34c5329b772c137e69d1c4bc68b6f46c9547eaa59&amp;source=constructor"
          width="952"
          height="577"
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
