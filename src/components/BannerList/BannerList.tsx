import withSceleton from '../../helpers/hocs/withSceleton';
import { INews } from '../../interfaces';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';

interface Props {
  banners?: INews[] | null;
}

const BannerList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannerListWithSkeleton = withSceleton<Props>(
  BannerList,
  'banner',
  6,
  'row'
);

export default BannerListWithSkeleton;
