import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Database, Gauge, User } from "lucide-react";

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
              <span className={styles.info_name}>
                Михайлов Даниил Витальевич
              </span>
              <span className={styles.info_role}>Педагог</span>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link href={"/profile"}>
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
        )}
      </div>
    </header>
  );
};
