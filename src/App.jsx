import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import Header from './Header'
import ThemeContext, { theme, toggleTheme } from './context/Context'



function App() {
  const [estadoMoto, setEstadoMoto] = useState('apagada')
  const [contador, setContador] = useState(0)

  const [currentTheme, setCurrentTheme] = useState(theme)

  const inputRef = useRef(null);

  const focusEnInput = () => {
    inputRef.current.focus();
  };

  const encenderApagar = () => {
    (estadoMoto == 'apagada') ? setEstadoMoto('encendida') : setEstadoMoto('apagada');
    setContador(contador+1)
  }

  useEffect(() => {
    console.log('Total: ' + contador)
  }, [contador])

  const toggleThemeHandler = () => {
    toggleTheme();
    setCurrentTheme({ ...theme });
  };


  return (

    <ThemeContext.Provider value={{ ...currentTheme, toggleTheme: toggleThemeHandler }}>
  
      <div className="App">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>        
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Moto {estadoMoto}</h1>
        <h2>Clicks:{contador}</h2>

        <div className="card">
          <button onClick={() => {
            encenderApagar();
            focusEnInput();        
          }}>apagar/encender!</button>
          
        </div>
        <div>
          <input type="text" ref={inputRef} />
        </div>


          <div>
            <h1>useContext:</h1>
          </div>

          <Header></Header>
      </div>
    </ThemeContext.Provider>
  )
}

export default App


// 1.- useState: es un hook que declara una variable
// y una funcion para modificar esa variable.

// 2.- useEffect: es una funcion que se ejecuta cada vez 
// que se hace un cambio en el estado de la variable creada 
// por el useState.

// 3.- useRef: es como para guardar una referencia en una variable y
// luego usarla por ejemplo para que al dar click a un boton haga focus
// sobre un input al cual le asignaste la variable con el useRef.

// 4.- useContext: