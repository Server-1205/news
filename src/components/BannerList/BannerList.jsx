import withSceleton from '../../helpers/hocs/withSceleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';

const BannerList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannerListWithSkeleton = withSceleton(BannerList, 'banner', 6, 'row');

export default BannerListWithSkeleton;
