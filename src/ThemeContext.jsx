import React, { useContext, useState, createContext } from "react";

const ThemeContext = React.createContext();

const UpdateThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(UpdateThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
