import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  
  const [ theme, setTheme ] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme])

  function handleChange() {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  return(
    <ThemeContext.Provider value={{ theme, handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
}