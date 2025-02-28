﻿import { useTheme } from '../../context/ThemeContext';
import { IPaginationProps } from '../../interfaces';
import styles from './style.module.css';

export const Pagination = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.ligth}`}>
      <button
        onClick={handlePreviousPage}
        className={styles.button}
        disabled={currentPage <= 1}>
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={styles.button}
            key={index}
            disabled={index + 1 === currentPage}>
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        className={styles.button}
        disabled={currentPage >= totalPages}>
        {'>'}
      </button>
    </div>
  );
};
