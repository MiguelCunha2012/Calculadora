import React from "react";
import ReactDOM from 'react-dom/client'
import PaginaLayout from "./PaginaLayout";
import CalculadoraJuros from "./CalculadoraJuros";
import './CalculadoraJuros.css';
import PersonagemsemFundo from './assets/PersonagemSemFundo.png'

ReactDOM.createRoot (document.getElementById('root')). render(
  <React.StrictMode>
    <PaginaLayout>
      <div  className="introducao">
          <h2>Olá. Eu sou sua calculadora financeira <img src={PersonagemsemFundo} alt="Personagem" className="Personagem-img" /></h2>
          <p>Use nossa ferramenta para simular o poder dos juros compostos e veja
          seu dinheiro render ao longo do tempo. Preencha os campos abaixo e
          descubra o potencial dos seus investimentos.</p>
      </div>  
    <CalculadoraJuros/>
    </PaginaLayout>
  </React.StrictMode>
);