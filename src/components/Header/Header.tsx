import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.ligth}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>News React</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <div
        onClick={toggleTheme}
        className={`${styles.theme} ${isDark ? styles.dark : styles.ligth}`}>
        theme
      </div>
    </header>
  );
};

export default Header;
