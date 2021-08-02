import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Footer() {
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
      MY FOOTER
    </div>
  );
}

export default Footer;
