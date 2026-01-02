// Importações
// import React from 'react';

// Importar estilos CSS do SideBar
import '../../styles/SidebarTeam.css';


// Dados Fictícios para simular a listagem de Grupo
const groupNames = [
    { nome: 'Heróis da Lógica', id: 'SALA-01', players: '5/5', leader: 'Herói da Lógica' },
    { nome: 'Geômetras', id: 'SALA-02', players: '5/5', leader: 'Explorador' },
    { nome: 'Álgebricos', id: 'SALA-03', players: '5/5', leader: 'Decifrador' },
    { nome: 'Trigonômetros', id: 'SALA-04', players: '5/5', leader: 'Geômetra' },
    { nome: 'Estatísticos', id: 'SALA-05', players: '5/5', leader: 'Lógico' },
    { nome: 'Topógrafos', id: 'SALA-06', players: '5/5', leader: 'Analista' },
    { nome: 'Aritméticos', id: 'SALA-07', players: '5/5', leader: 'Calculista' },
];

// Componente do Sidebar
const SidebarTeam = () => {
    return (
        <aside className="sidebar-container col-span-2 row-span-8 col-start-1 row-start-2">
            <div className="sidebar-header">
                <h2 className="sidebar-title">EXPEDICIONÁRIOS</h2>
            </div>

            <div className="groups-list">
                {groupNames.map((group, index) => (
                    <div key={index} className="group-card">
                        <div className="group-avatar">
                            <i className="hn hn-users-solid"></i>
                        </div>

                        <div className="group-info">
                            <div className="info-row-top">
                                <span className="group-name">{group.nome}</span>
                                <span className="leader-name">{group.leader}</span>
                            </div>

                            <div className="info-row-bottom">
                                <span className="room-id">{group.id}</span>
                                <span className="player-count">{group.players}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default SidebarTeam;