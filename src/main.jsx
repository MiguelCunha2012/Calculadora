import React from "react";
import ReactDOM from 'react-dom/client'
import PaginaLayout from "./PaginaLayout";
import CalculadoraJuros from "./CalculadoraJuros";
import './CalculadoraJuros.css'

ReactDOM.createRoot (document.getElementById('root')). render(
  <React.StrictMode>
    <PaginaLayout>
    <CalculadoraJuros/>
    </PaginaLayout>
  </React.StrictMode>
);