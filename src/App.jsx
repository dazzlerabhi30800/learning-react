import React from "react";
import { FunctionComp } from "./FunctionComp";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionComp />
      </ThemeProvider>
    </>
  );
}

export default App;
