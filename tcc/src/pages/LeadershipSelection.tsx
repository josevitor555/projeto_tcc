// import React from 'react';
import '../styles/LeadershipSelection.css';
import videoSrc from "../assets/gravity_falls.mp4";


const participants = [
    { name: 'João da Silva', id: '23435453', votes: '1/5', active: true },
    { name: 'Maria Eduarda', id: '56788976', votes: '4/5', active: false },
    { name: 'Maria Helena', id: '14685453', votes: '0/5', active: true },
    { name: 'David Pereira', id: '14594913', votes: '0/5', active: true },
    { name: 'João Maria', id: '14933553', votes: '0/5', active: true },
];

const LeadershipSelection = () => {
    return (
        <div className="relative min-h-screen w-full">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                onLoadedData={(e) => console.log('Vídeo carregado:', e.target)}
                onError={(e) => console.error('Erro ao carregar vídeo:', e)}
            >
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            
            <div className="leadership-screen">
                <h1 className="main-title">Quem Vai Ser o Líder ?</h1>

                <div className="pixel-card-container">
                    <div className="card-header">
                        <div className="header-left">
                            <h2>Participantes do Grupo</h2>
                            <span>SALA-01</span>
                        </div>
                        <span className="group-name flex items-center justify-center gap-2">
                            <i className="hn hn-users-solid"></i>
                            Grupo kepler
                        </span>
                    </div>

                    <div className="participants-list">
                        {participants.map((person, index) => (
                            <div
                                key={index}
                                className={`participant-row ${person.active ? 'row-active' : 'row-inactive'}`}
                            >
                                <div className="person-info">
                                    <span className="person-name">{person.name}</span>
                                    <span className="person-id">ID: {person.id}</span>
                                </div>

                                <div className="vote-count">{person.votes}</div>

                                {/* Corrigido: styles.pixel-btn-leader não funciona, use colchetes */}
                                <button className={`pixel-btn-leader ${!person.active ? 'btn-selected' : ''}`}>
                                    VOTAR
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipSelection;
