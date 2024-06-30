
import './App.css';
import Boton from './componente/Boton';
import Contador from './componente/Contador';
import freecodecamplogo from './imagenes/logo-freecodecamp.png'
import { useState } from 'react';

function App() {
  
  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1 );

  };

  const reiniciarcontador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freecodecamplogo} alt="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto='Clic' esBotondeClic={true} manejarClic={manejarClic} />

        <Boton texto='Reiniciar'  esBotondeClic={false} manejarClic={reiniciarcontador} />

      </div>
    </div>
  );
}

export default App;
