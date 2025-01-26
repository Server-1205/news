import styles from './styles.module.css';
import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';
import { useTheme } from '../../context/ThemeContext';

const Main = () => {
  const { isDark } = useTheme();

  return (
    <main className={`${styles.main} ${isDark ? styles.dark : styles.ligth}`}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
