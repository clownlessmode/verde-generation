import React from "react";
import css from "./Header.module.scss";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      
      <nav className={css.mainNav}>
        <Navigation />
        <Link href={"tel:+73466494203"}>
          <Button>Связаться с нами</Button>
        </Link>
      </nav>
      <nav className={css.burger}>
        <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
          <AlignJustify
            color={"#008080"}
            style={
              isOpen
                ? {
                    display: "none",
                  }
                : { display: "block" }
            }
          />
        </Button>
        {isOpen && (
          <div className={css.burgerMenu}>
            <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)}>
              <X color={"#008080"} />
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;