"use client";
import Link from "next/link";
import React from "react";
import css from "./Navigation.module.scss";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface HeaderItem {
  title: string;
  href: string;
  items?: HeaderItem[];
}
const HeaderItems: HeaderItem[] = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Проекты",
    href: "Title",
    items: [
      {
        title: "VolgaGas",
        href: "/projects/volgagas",
      },
      {
        title: "ТПГК",
        href: "/projects/tpgk",
      },
      {
        title: "Урал Газ",
        href: "/projects/uralgaz",
      },
      {
        title: "Ульяновск/Пенза",
        href: "/projects/ulyanovskpenza",
      },
      {
        title: "Узбекистан",
        href: "/projects/uzbekistan",
      },
    ],
  },
  {
    title: "О компании",
    href: "/company/",
    items: [
      {
        title: "О нас",
        href: "/company/aboutus",
      },
      {
        title: "История",
        href: "/company/history",
      },

      {
        title: "Команда",
        href: "/company/team",
      },

      {
        title: "Преимущества",
        href: "/company/advantages",
      },
    ],
  },
  {
    title: "Пресс Центр",
    href: "Title",
    items: [
      {
        title: "Новости",
        href: "News",
      },
      {
        title: "Фотогалерея",
        href: "Gallery",
      },
    ],
  },
  {
    title: "Контакты",
    href: "/contacts",
  },
];
const Navigation = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={css.wrapper}>
      {HeaderItems.map((item, index) => (
        <div className={css.navItem} key={index}>
          {item.items ? (
            <div className={css.dropdownWrapper}>
              <div className={css.dropdownTrigger}>
                <p>{item.title}</p>
                <ChevronDown />
              </div>
              <div className={css.dropdownContent}>
                {item.items.map((dropdownItem, index) => (
                  <Link href={dropdownItem.href} key={index}>
                    {dropdownItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={item.href}
              className={cn(
                pathname === item.href && "text-[#008080] cursor-default"
              )}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
