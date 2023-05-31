import React from "react";

const ThemeContext = React.createContext();

const theme = {
    background: 'white',
    color: 'black',
    toggleTheme: () => {},
}

export const toggleTheme = () => {
    theme.background = theme.background === 'dark' ? 'light' : 'dark';
  };

export default ThemeContext;
export {theme};


