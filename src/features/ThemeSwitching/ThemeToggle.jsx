import './theme-switch.css'

function ThemeToggle() {
  
  return(
    <label className="theme-toggle-switch">
      <div className="toggle-ball"></div>
      <input type="checkbox" name="theme-toggle" />
    </label>
  );
}

export default ThemeToggle