"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { ReactNode } from "react";

import styles from "./breadcrumbs.module.scss";
import { clsx } from "clsx";

interface Props {
  homeElement?: ReactNode;
  separator?: ReactNode;
  lastElement?: ReactNode | string;
  capitalizeLinks?: boolean;
}

const pathLabels = {
  dashboard: "Главная",
  lk: "Главная",
  profile: "Личные данные",
  groups: "Группы",
  store: "Магазин",
  newsfeeds: "Новости",
  tickets: "Обратная связь",
  students: "Ученики",
  infobase: "База знаний",
  timetable: "Расписание",
};

export const Breadcrumbs = ({
  homeElement,
  separator,
  capitalizeLinks,
  lastElement,
}: Props) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul className={styles.container}>
        {homeElement && (
          <>
            <li className={styles.link}>
              <Link href={"/"}>{homeElement}</Link>
            </li>
            <span>/</span>
          </>
        )}
        {pathNames.map((label, index) => {
          const link =
            pathLabels[label] ||
            (lastElement && index === pathNames.length - 1
              ? lastElement
              : "Страница");
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? clsx(styles.link, styles.active) : styles.link;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {pathNames.length === index + 1 && <span>{itemLink}</span>}
                {pathNames.length !== index + 1 && (
                  <Link href={href}>{itemLink}</Link>
                )}
              </li>
              {pathNames.length !== index + 1 && (separator || <span>/</span>)}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
