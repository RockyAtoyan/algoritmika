"use client";

import styles from "./schedule.module.scss";
import { cn } from "@/shared/utils";
import Link from "next/link";

export const Schedule = () => {
  return (
    <div>
      <h3 className={"font-bold text-2xl mb-3"}>Бондаренко Мария Михайловна</h3>
      <div className={"flex bg-background rounded pl-6"}>
        <div className={cn("flex flex-col pt-[55px]")}>
          <div className={cn(styles.item)}>10:00</div>
          <div className={cn(styles.item)}>11:00</div>
          <div className={cn(styles.item)}>12:00</div>
          <div className={cn(styles.item)}>13:00</div>
          <div className={cn(styles.item)}>14:00</div>
          <div className={cn(styles.item)}>15:00</div>
          <div className={cn(styles.item)}>16:00</div>
          <div className={cn(styles.item)}>17:00</div>
          <div className={cn(styles.item)}>18:00</div>
        </div>
        <div className={cn(styles.column)}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}>
            <div className={cn(styles.content_wrapper)}>
              <Link
                href={"/dashboard/groups/1"}
                className={cn(styles.content_item, "!w-1/2")}
              >
                <div>
                  <span>КГ, пн 23/24 Уральская 59</span>
                  <span>10:00 - 11:30</span>
                </div>
              </Link>
              <Link
                href={"/dashboard/groups/1"}
                className={cn(styles.content_item, "!w-1/2")}
              >
                <div>
                  <span>КГ, пн 23/24 Уральская 59</span>
                  <span>10:00 - 11:30</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={cn(styles.grid, "border-l")}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}></div>
          <div className={styles.grid}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}>
            <div className={cn(styles.content_wrapper)}>
              <Link
                href={"/dashboard/groups/1"}
                className={cn(styles.content_item)}
              >
                <div>
                  <span>КГ, пн 23/24 Уральская 59</span>
                  <span>10:00 - 11:30</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}></div>
          <div className={styles.grid}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}></div>
          <div className={styles.grid}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}></div>
          <div className={styles.grid}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.header}>
            <span>Понедельник</span>
            <span>Авг 19, 2024</span>
          </div>
          <div className={styles.content}></div>
          <div className={styles.grid}>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
            <div className={styles.grid_item}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
