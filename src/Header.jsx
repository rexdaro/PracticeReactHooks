import React, { useContext } from 'react'
import ThemeContext from './context/Context';

const Header = () => {

  const theme = useContext(ThemeContext);

  return (
    <h1 style={{background: theme.background, color: theme.color}}>Header</h1>
  )
}

export default Header