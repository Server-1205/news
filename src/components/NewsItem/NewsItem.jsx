import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <img src={item.image} alt='news' />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>

        <p>{formatTimeAgo(item.published)}</p>
      </div>
    </li>
  );
};

export default NewsItem;
