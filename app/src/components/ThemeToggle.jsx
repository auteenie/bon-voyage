import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? 'light' : 'dark'}
    </button>
  );
};

export default ThemeToggle; 