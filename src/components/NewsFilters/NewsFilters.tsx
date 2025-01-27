import { IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { setFilters } from '../../store/slices/newsSlice';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './styles.module.css';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      {data ? (
        <Categories
          categories={data.categories}
          setSelectedCategory={(category) => {
            dispatch(setFilters({ key: 'category', value: category }));
          }}
          selectedCategory={filters.category}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          dispatch(setFilters({ key: 'keywords', value: keywords }));
        }}
      />
    </div>
  );
};

export default NewsFilters;
