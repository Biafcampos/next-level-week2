import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div >
      <Header title = "hello world"/> 
      <Header title = "falaaa dev!!!!!"/> 
      <Header title = "eaiii rapeizeee estado!!!"/> 
      <button type="button" onClick={console.log}>Aumentar</button>

        <h1> Conteudo da aplicação</h1>
     
    </div>
  );
}

export default App;
