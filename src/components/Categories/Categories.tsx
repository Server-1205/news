import { useTheme } from '../../context/ThemeContext';
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
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.categories} ${isDark ? styles.dark : styles.ligth}`}>
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
