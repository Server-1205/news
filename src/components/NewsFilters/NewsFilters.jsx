import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './styles.module.css';

const NewsFilters = ({ changeFiltes, filters }) => {
  const { data: dataCategories } = useFetch(getCategories);

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
