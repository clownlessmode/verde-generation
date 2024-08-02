"use client";

import React from "react";
import css from "./Contacts.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";

const ContactsLink = dynamic(() => import("./ContactsLink"), { ssr: false });

const Contacts = () => {
  return (
    <section className={css.wrapper}>
      <ToastContainer />
      <h1>Контакты</h1>
      <div className={css.content}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6912e1170c87e01de27e5609638ae5cbdc0f5393569f4d0b8108ab3977d94c37&amp;source=constructor"
          width="807"
          height="372"
          frameBorder="0"
        ></iframe>
        <div className={css.addressblock}>
          <div className={css.address}>
            <h2>Адрес</h2>
            <p>
              123112, город Москва, Пресненская наб., дом 12, этаж 35, пом. № 7/35
            </p>
          </div>
          <div className={css.contacts}>
            <h2>Контакты</h2>
            <div className={css.links}>
              <ContactsLink text="info@verdeg.com" scheme="mailto">
                info@verdeg.com
              </ContactsLink>
              <ContactsLink text="+73466494203" scheme="tel">
                +7 (3466) 49-42-03
              </ContactsLink>
            </div>
          </div>
          <div className={css.socialmedia}>
            <h2>Соц. Сети</h2>
            <ContactsLink text="info@verdeg.com" scheme="mailto">
              <Image
                alt=""
                src="/assets/contacts/air.svg"
                height={24}
                width={24}
              />
              info@verdeg.com
            </ContactsLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
