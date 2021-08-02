// import React, { useContext, createContext, useState } from "react";
// export const ThemeContext = createContext();
// const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState({
//     isLightTheme: true,
//     light: {
//       background: "green",
//       color: "black",
//     },
//     dark: {
//       background: "black",
//       color: "white",
//     },
//   });
//   const tongleTheme = () => {
//     setTheme({
//       ...theme,
//       isLightTheme: !theme.isLightTheme,
//     });
//   };
//   const themeContextData = {
//     theme,
//     tongleTheme
//   };
//   return (
//     <ThemeContext.Provider value={themeContextData}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// export default ThemeContextProvider;

/*Su dung useContext va useReducer*/

import { createContext, useReducer } from "react";
import themeReducer, { initialState } from "../reducer/themeReducer";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
