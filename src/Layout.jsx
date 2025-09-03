import React from "react";
import MenuSuperior from './MenuSuperior';
import './PaginaLayout.css';

function PaginaLayout({ children}){
    return(
        <div className="pagina-layout">
            <MenuSuperior/>
            <main className= "conteudo-principal">
                {children}
            </main>
        <footer className= "rodape">
            <p>&copy; 2025 Calculadora. Todos os direitos reservados.</p>
        </footer>
        </div>
    );
}

export default PaginaLayout;
