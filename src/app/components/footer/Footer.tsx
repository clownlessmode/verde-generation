"use client";
import React from "react";
import css from "./Footer.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  if (path === "/contacts") {
    return null;
  }

  return (
    <footer className={css.wrapper}>
      <p>Москва, Пресненская набережная, 12</p>
      <Link href={"mailto:info@verdeg.com"}>info@verdeg.com</Link>
    </footer>
  );
};

export default Footer;
