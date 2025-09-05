import React from "react";
import './MenuSuperior.css';

function MenuSuperior() {
    return (
        <header className="menu-superior">
            <nav>
                <div className="logo">
                    <a href="/">Calculadora de Juros Compostos</a>
                </div>
                <ul className="menu-itens">
                    <li><a href="/">Calculadora</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
);
}
export default MenuSuperior;