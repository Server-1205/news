﻿import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import withSceleton from '../../helpers/hocs/withSceleton';
import Image from '../Image/Image';
import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>{formatTimeAgo(item.published)}</p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSceleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
