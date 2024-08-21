import Link from "next/link";
import Image from "next/image";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.office}>
        <div className={styles.wrapper}>
          <Link href={"/institutions"}>Контактные данные учреждений</Link>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Link href={"/changelog"} className={styles.link}>
            <span>
              Личный кабинет Алгоритмики © 2018 - {new Date().getFullYear()}
            </span>
            <span>Версия: 1.8.6</span>
          </Link>
          <Image
            className={styles.image}
            src={"/payments.png"}
            alt={"payments"}
            width={244}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};
