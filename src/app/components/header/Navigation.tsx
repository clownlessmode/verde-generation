"use client";
import Link from "next/link";
import React from "react";
import css from "./Navigation.module.scss";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface HeaderItem {
  title: string;
  href: string;
  items?: HeaderItem[];
}

interface Project {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates?: {
    timestart: string;
    timeend: string;
    compnames: string;
    names: string;
  }[];
  stats: {
    title: string;
    value: string;
  }[];
}

const Navigation = () => {
  const projects = useQuery(api.projects.listProjects);
  const pathname = usePathname();

  const HeaderItems: HeaderItem[] = [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Проекты",
      href: "Title",
      items: projects?.map((project) => ({
        title: project.title,
        href: `/projects/${project._id}`,
      })) || [],
    },
    {
      title: "О компании",
      href: "/company/",
      items: [
        { title: "О нас", href: "/company/aboutus" },
        { title: "История", href: "/company/history" },
        { title: "Команда", href: "/company/team" },
        { title: "Преимущества", href: "/company/advantages" },
      ],
    },
    {
      title: "Пресс Центр",
      href: "/press-centre/",
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