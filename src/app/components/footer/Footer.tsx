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
      <p>Москва, 2-я Звенигородская ул., 12А</p>
      <Link href={"mailto:info@verdeg.com"}>info@verdeg.com</Link>
    </footer>
  );
};

export default Footer;
