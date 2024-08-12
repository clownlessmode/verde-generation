import React, { useState } from "react";
import css from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import { AlignJustify, X, ChevronLeft } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface HeaderItem {
  title: string;
  href?: string;
  items?: HeaderItem[];
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<HeaderItem | null>(null);

  const projects = useQuery(api.projects.listProjects);

  const handleMenuClick = (item: HeaderItem) => {
    if (item.items) {
      setActiveMenu(item);
    } else {
      setIsOpen(false);
    }
  };

  const HeaderItems: HeaderItem[] = [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Проекты",
      items:
        projects?.map((project) => ({
          title: project.title,
          href: `/projects/${project._id}`,
        })) || [],
    },
    {
      title: "О компании",
      items: [
        { title: "О нас", href: "/company/aboutus" },
        { title: "История", href: "/company/history" },
        { title: "Команда", href: "/company/team" },
        { title: "Преимущества", href: "/company/advantages" },
      ],
    },
    {
      title: "Пресс Центр",
      items: [
        { title: "Новости", href: "/press-centre/news" },
        { title: "Фотогалерея", href: "/press-centre/gallery" },
      ],
    },
    {
      title: "Контакты",
      href: "/contacts",
    },
  ];

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
    setActiveMenu(null);
  };

  return (
    <header className={css.wrapper}>
      <Link href={"/"}>
        <Image
          alt=""
          src={"/assets/header/Logotype.svg"}
          width={150}
          height={27}

        />
      </Link>

      <nav className={css.mainNav}>
        <Navigation />
      </nav>

      <nav className={css.burger}>
        <Button variant={"ghost"} onClick={handleBurgerClick}>
          {isOpen ? (
            <X color={"#008080"} />
          ) : (
            <AlignJustify color={"#008080"} />
          )}
        </Button>
        {isOpen && (
          <div className={css.burgerMenu}>
            <div className={css.gradientOverlay}></div>
            {activeMenu ? (
              <div className={css.subMenu}>
                <Button
                  className={css.backButton}
                  variant={"ghost"}
                  onClick={() => setActiveMenu(null)}
                >
                  <ChevronLeft color={"#008080"} />
                </Button>
                <h2 className={css.subMenuTitle}>{activeMenu.title}</h2>
                {activeMenu.items?.map((subItem, index) => (
                  <Link
                    key={index}
                    href={subItem.href || "#"}
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                ))}
                <Link href={"tel:+73466494203"}>
                  <Button>Связаться с нами</Button>
                </Link>
              </div>
            ) : (
              <div className={css.burgerLinks}>
                  <h2 className={css.subMenuTitle}>МЕНЮ</h2>
                  {HeaderItems.map((item: HeaderItem, index: React.Key | null | undefined) => (
                    <div
                      key={index}
                      onClick={() => handleMenuClick(item)}
                      className={css.menuItem}
                    >
                      {item.items ? (
                        <a>{item.title}</a>
                      ) : (
                        <Link href={item.href || "#"}>{item.title}</Link>
                      )}
                    </div>
                  ))}
                  <Link href={"tel:+73466494203"}>
                    <Button>Связаться с нами</Button>
                  </Link>
                </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
