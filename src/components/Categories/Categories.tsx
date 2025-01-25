import styles from './styles.module.css';

interface Props {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Categories = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category ? styles.active : styles.item
          }
          onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
