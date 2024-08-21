"use client";

import React from "react";
import css from "./Contacts.module.scss";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { Mail } from "lucide-react";

const ContactsLink = dynamic(() => import("./ContactsLink"), { ssr: false });

const Contacts = () => {
  return (
    <section className={css.wrapper}>
      <ToastContainer />
      <h1>Контакты</h1>
      <div className={css.content}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Af550a6201d573a006e85b557dd069eb19a7c2af328cba54faf59be24934a46a0&amp;source=constructor"
          width="807"
          height="346"
          frameBorder="0"
        ></iframe>
        <div className={css.addressblock}>
          <div className={css.address}>
            <h2>Адрес</h2>
            <p>Москва, Пресненская набережная, 12</p>
          </div>
          <div className={css.mail}>
            <h2>Почта</h2>
            <Link href={"mailto:info@verdeg.com"}>
              <Mail color="#008080" />
              <p className={css.mailtext}>info@verdeg.com</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
