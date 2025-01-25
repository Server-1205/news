import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import { CategoryesApiResponse, IFilters } from '../../interfaces';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './styles.module.css';

interface Props {
  filters: IFilters;
  changeFiltes: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ changeFiltes, filters }: Props) => {
  const { data: dataCategories } = useFetch<CategoryesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.header}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) => {
            changeFiltes('category', category);
          }}
          selectedCategory={filters.category}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFiltes('keywords', keywords);
        }}
      />
    </div>
  );
};

export default NewsFilters;
