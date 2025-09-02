import React, { useState } from "react";
import './CalculadoraJuros.css';

function CalculadoraJuros(){
    const [capital, setCapital] = useState('');
    const [taxa, setTaxa] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [montante, setMontante] = useState(null);

    const handleCalcular = () => {
        const C = parseFloat(capital);
        const i = parseFloat(taxa) / 100;
        const t = parseFloat(periodo);

        if (!C || !i || !t){
            alert("Preencha todos os campos.");
            return;
        }

        const resultado = C * Math.pow((1 + i), t);
        setMontante(resultado.toFixed(2));
    }

    return(
        <div className="calculadora-container">
        <h1>Calculadora de Juros Compostos</h1>
        <div className="input-group">
        <label htmlFor="Capital Inicial (R$): "></label>   
        <input type="number" 
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
        placeholder="Ex: 1000" />
        </div>

        <div className="inpout-group">
            <label htmlFor="Taxa de Juros Mensal (%): "></label>
            <input type="number" 
            value={taxa}
            onChange={(e) => setTaxa(e.target.value)}
            placeholder="Ex: 1.5" />
        </div> 
        <div className="input-group">
            <label htmlFor="Período de Tempo (meses): "></label>
            <input 
            type="number" 
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            placeholder="Ex: 12" />
        </div>
       <button onClick={handleCalcular}>Calcular</button>
       {montante !== null &&(
        <div className= "resultado">
        <h2>Resultado</h2>
        <p>O montante final será de <strong>R$ {montante}</strong></p>
        </div>       
       )}
       </div>
    );
}

export default CalculadoraJuros;