import { useState } from 'react';
import './App.css';
import Relogio from './components/Relogio/Relogio';
import Botao from './components/Botao/Botao';

function App() {
  const [ligado, setLigado] = useState(false);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [mili, setMili] = useState(0);
  
  if (ligado){
    setTimeout(() => {
      milis();
    }, 1);
  }
  function milis(){
    setMili(mili + 1);
    if(mili > 999){
      setMili(0);
      setSegundos(segundos + 1);
    }
    if (segundos > 59){
      setSegundos(0);
      setMinutos(minutos + 1);
    }
  }
  function reset(){
    setSegundos(0); 
    setMili(0);
    setMinutos(0);
  }
  function pausa(){
    if (ligado){
      setLigado(false)
    } 
    else if(!ligado) {
      if (mili > 1){
        setLigado(true)
      }
    }

  }

  return (
   
    <>
      <Relogio minutos={minutos} segundos={segundos} mili={mili}/>
      <div className='botoes'>
        <Botao nome='Iniciar' className='iniciar' onClick={() => setLigado(true)} />
        <Botao nome='Pausar' className='pausar' onClick={() => pausa()}/>
        <Botao nome='Reiniciar' className='reiniciar' onClick={() => {setLigado(false);setTimeout(() => {reset()}, 100)}}/>
      </div>
    </>
  );
}

export default App;