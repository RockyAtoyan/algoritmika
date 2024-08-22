"use client";

import React, { FC, useMemo } from "react";
import { cn as classnames } from "@/shared/utils/classNames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./pagination.module.scss";

export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    /*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

interface Props {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize?: number;
  className?: string;
}

export const Pagination: FC<Props> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize = 10,
    className,
  } = props;

  const setPage = (page: number) => {
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      updatedSearchParams.delete("page");
    } else {
      updatedSearchParams.set("page", `${page}`);
    }
    router.push(pathname + "?" + updatedSearchParams.toString());
  };

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    setPage(currentPage + 1);
  };

  const onPrevious = () => {
    setPage(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames(styles.container, { [className]: className })}>
      <li
        className={classnames(styles.item, {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={classnames(styles.arrow, styles.left)} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className={classnames(styles.item, styles.dots)}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classnames(styles.item, {
              [styles.selected]: pageNumber === currentPage,
            })}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(styles.item, {
          [styles.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={classnames(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};
