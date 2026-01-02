// Importações
// import React from 'react';
import '../../styles/Header.css';

// Componente do Cabeçalho
const Header = () => {
    return (

        <header className="header col-span-8 row-span-1">
            <div className="header-content">
                
                {/* Primeira coluna - Logo */}
                <div className="header-logo">
                    <i className="hn hn-gaming"></i>
                    <h1>MathQuest</h1>
                </div>

                {/* Coluna do meio - Links e botões */}
                {/* <div className="header-nav">
                    <nav>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </div> */}

                {/* Última coluna - Ícones */}
                <div className="header-icons">
                    <button>
                        <i className="hn hn-bell cursor-pointer"></i>
                    </button>
                    <button>
                        <i className="hn hn-user cursor-pointer"></i>
                    </button>
                    {/* <button>
                        <i className="hn hn-outdent-solid cursor-pointer"></i>
                    </button> */}
                </div>
            </div>
        </header>
    );
};


export default Header;
