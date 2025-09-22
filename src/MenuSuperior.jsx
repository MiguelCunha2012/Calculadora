    import React from "react";
    import './MenuSuperior.css';
    import LogoImage from './assets/Logo.png';

    function MenuSuperior() {
        return (
            <header className="menu-superior">
                <nav>
                    <div className="logo">
                        <a href="/">
                        <img src={LogoImage} alt="Logo" />
                        </a>
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