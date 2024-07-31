import React from "react";
import css from "./Footer.module.scss";


const Footer = () => {
  return (
    <footer className={css.wrapper}>
      <div>
        <p>Москва, Пресненская набережная, д. 12</p>
        <p>+7 123 321 12 23</p>
        <p>info@verneg.com</p>
      </div>
    </footer>
  );
};

export default Footer;
