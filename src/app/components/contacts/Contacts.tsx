import React from "react";
import css from "./Contacts.module.scss";
import Image from "next/image";

const Contacts = () => {
  return (
    <section className={css.wrapper}>
      <h1>Контакты</h1>
      <div className={css.content}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6912e1170c87e01de27e5609638ae5cbdc0f5393569f4d0b8108ab3977d94c37&amp;source=constructor"
          width="807"
          height="372"
          frameborder="0"
        ></iframe>
        <div className={css.addressblock}>
          <div className={css.address}>
            <h2>Адрес</h2>
            <p>
              123112, город Москва, Пресненская наб., дом 12, этаж 35, пом. №
              7/35
            </p>
          </div>
          <div className={css.contacts}>
            <h2>Контакты</h2>
            <div className={css.links}>
              <a href="#">info@verdeg.com</a>
              <a href="#">+7 (3466) 49-42-03</a>
            </div>
          </div>
          <div className={css.socialmedia}>
            <h2>Соц. Сети</h2>
            <a href="#">
              <Image
                alt=""
                src="/assets/contacts/air.svg"
                height={24}
                width={24}
              />{" "}
              info@verdeg.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
