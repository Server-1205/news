﻿import { DirectionType, SkeletonType } from '../../interfaces';
import styles from './styles.module.css';

interface Prop {
  count?: number;
  type?: SkeletonType;
  direction?: DirectionType;
}

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }: Prop) => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === 'column' ? styles.columnlist : styles.rowlist
          }>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === 'banner' ? styles.banner : styles.item}></li>
          ))}
        </ul>
      ) : (
        <li className={type === 'banner' ? styles.banner : styles.item}></li>
      )}
    </>
  );
};

export default Skeleton;
