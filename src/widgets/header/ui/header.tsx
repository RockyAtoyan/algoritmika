import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Database, Gauge, User } from "lucide-react";
import { cn } from "@/shared/utils";
import { MenuButton } from "./menu-button";

export const Header = () => {
  const authUser = true;

  return (
    <header className={styles.main}>
      <div className={styles.inner}>
        <Link className={styles.logo} href={"/"}>
          <Image
            className={styles.logo_image}
            src={"/logo.png"}
            alt={"logo"}
            width={500}
            height={144}
          />
          <span className={styles.logo_text}>
            г. Екатеринбург, Кировский р-он
          </span>
        </Link>
        {authUser && (
          <div className={"flex items-center"}>
            <div className={styles.profile}>
              <Image
                className={styles.image}
                src={
                  "https://www.gravatar.com/avatar/dc576a480658ff9d10ef53f1e26fd49c?d=robohash"
                }
                alt={"user"}
                width={100}
                height={100}
              />
              <div className={styles.info}>
                <span className={cn("hidden lg:block", styles.info_name)}>
                  Михайлов Даниил Витальевич
                </span>
                <span className={cn("hidden lg:block", styles.info_role)}>
                  Педагог
                </span>
                <ul
                  className={cn(
                    "w-[200px] right-0 lg:w-full lg:right-auto lg:left-0",
                    styles.list,
                  )}
                >
                  <li className={styles.item}>
                    <Link href={"/lk/profile"}>
                      <User />
                      <span>Профиль</span>
                    </Link>
                  </li>
                  <li className={styles.item}>
                    <Link href={"/dashboard"}>
                      <Gauge />
                      <span>Панель управления</span>
                    </Link>
                  </li>
                  <li className={styles.item}>
                    <Link href={"/dashboard/infobase"}>
                      <Database />
                      <span>База знаний</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <MenuButton />
          </div>
        )}
        {!authUser && (
          <div className={styles.actions}>
            <Link className={styles.login} href={"/login"}>
              Вход
            </Link>
            <MenuButton />
          </div>
        )}
      </div>
    </header>
  );
};
