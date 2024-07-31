import React from "react";
import css from "./Header.module.scss";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className={css.wrapper}>
      <Link href={"/"}>
        <Image
          alt="Logotype Verde"
          src={"/assets/header/Logotype.svg"}
          width={260}
          height={37}
        />
      </Link>
      <nav>
        <Navigation />
        <Link href={"/"}>
          <Button>Связаться с нами</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
