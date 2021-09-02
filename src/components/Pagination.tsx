import React, { FC } from "react";

export interface PaginationProps {
  amountItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (indexPage: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  amountItems,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i < Math.ceil(amountItems / pageSize) + 1; i++) {
    pages.push(i);
  }

  if (pages.length === 1) return null;

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={"page-item" + (page === currentPage ? " active" : "")}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
