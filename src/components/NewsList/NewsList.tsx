﻿import withSceleton from '../../helpers/hocs/withSceleton';
import { INews } from '../../interfaces';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.css';

interface Props {
  news?: INews[]
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const NewsListWithSkeleton = withSceleton<Props>(NewsList, 'items', 10);

export default NewsListWithSkeleton;
