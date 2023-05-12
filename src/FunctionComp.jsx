import { useTheme, useUpdateTheme } from "./ThemeContext";

export function FunctionComp() {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();
  const styles = {
    backgroundColor: darkTheme ? "#000" : "#ccc",
    color: darkTheme ? "#fff" : "#000",
    padding: "1.5rem",
    margin: "10px auto",
    transition: "0.3s linear",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={styles}> This is a function component;</div>;
    </>
  );
}
