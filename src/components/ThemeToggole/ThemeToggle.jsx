import  { useState } from 'react';

function ThemeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div>
      <button className='btn' onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
