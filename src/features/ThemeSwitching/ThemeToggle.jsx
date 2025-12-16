import './theme-switch.css'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {

  const { theme, handleChange} = useContext(ThemeContext);
  
  return(
    <label className="theme-toggle-switch">
      <div className="toggle-ball"></div>
      <input 
        type="checkbox" 
        name="theme-toggle" 
        onChange={handleChange}
        checked={theme === "light"}
      />
    </label>
  );
}

export default ThemeToggle