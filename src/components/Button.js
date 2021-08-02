import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import themeReducer from "../reducer/themeReducer";

function Button() {
  const { state, dispatch } = useContext(ThemeContext);

  const { isTheme } = state;
  return (
    <div
      style={{
        width: 80,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: isTheme ? "black" : "green",
        color: isTheme ? "white" : "black",
      }}
    >
      <button onClick={() => dispatch({ type: "ISTHEME" })}>BUTTON</button>
    </div>
  );
}

export default Button;
