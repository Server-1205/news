import Header from './components/Header/Header';
import { useTheme } from './context/ThemeContext';

import Main from './pages/Main/Main';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'ligth'}`}>
      <Header />
      <div className='container'>
        <Main />
      </div>
    </div>
  );
}

export default App;
