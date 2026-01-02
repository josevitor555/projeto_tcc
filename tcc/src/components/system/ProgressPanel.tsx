// Importações
// import React from 'react';

// Importar aquivo CSS
import '../../styles/ProgressPanel.css';

// Componente do Mural (barra de progresso)
const ProgressPanel = () => {

    // Dados de exemplo para demonstração
    const xpPercentage = 40; // Porcentagem de XP atual
    const currentLevel = 1;
    const currentQuestion = 3;
    const totalQuestions = 9;
    
    // Sistema de tempo dinâmico por nível com nomes temáticos
    const getLevelInfo = (level: number) => {
        switch(level) {
            case 1: return { time: 90, name: "Explorador" }; // 1:30 min para nível básico
            case 2: return { time: 150, name: "Guardião dos Códigos" }; // 2:30 min para nível intermediário
            case 3: return { time: 240, name: "Experiente" }; // 4:00 min para nível avançado
            default: return { time: 120, name: "Aprendiz" }; // Padrão
        }
    };
    
    const levelInfo = getLevelInfo(currentLevel);
    const timeLeft = levelInfo.time; // segundos
    
    // Dados de exemplo para o leaderboard
    const leaderboard = [
        { name: "Heróis da Lógica", score: 850, isLeader: true },
        { name: "Geômetras", score: 720, isLeader: false },
        { name: "Álgebricos", score: 650, isLeader: false },
        { name: "Trigonômetros", score: 580, isLeader: false },
        { name: "Estatísticos", score: 520, isLeader: false },
        { name: "Topógrafos", score: 480, isLeader: false },
        { name: "Aritméticos", score: 450, isLeader: false },
    ];
    
    // Número de dicas usadas
    const hintsUsed = 2;
    
    return (
        <div className="progress-panel col-span-2 row-span-8 col-start-7 row-start-2">
            
            {/* Barra de Experiência (XP) Individual */}
            <div className="progress-section">
                <h3>SEU PROGRESSO</h3>
                <div className="level-badge">Nível {currentLevel} - {levelInfo.name}</div>
                <div className="xp-bar-container">
                    <div className="xp-bar-fill" style={{ width: `${xpPercentage}%` }}></div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                    XP: {xpPercentage * 10}/900
                </div>
            </div>
            
            {/* Painel de Status da Questão Atual */}
            <div className="progress-section">
                <h3>DESAFIO EM ANDAMENTO</h3>
                <div className="timer-container">
                    <div className="timer">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</div>
                    <div className="question-counter">Questão {currentQuestion}/{totalQuestions}</div>
                </div>
            </div>
            
            {/* Mural de Conquistas da Sala (Ranking) */}
            <div className="progress-section">
                <h3>RANKING DA SALA</h3>
                <div>
                    {leaderboard.map((player, index) => (
                        <div key={index} className="leaderboard-item flex items-center justify-between">
                            <span className={player.isLeader ? "leader-name leader-leader" : "leader-name"}>
                                {player.isLeader ? <> <i className="hn hn-crown-solid"></i> {player.name}</> : player.name}
                            </span>
                            <span className="leader-score">{player.score} XP</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Inventário de Ajuda (Dicas) */}
            <div className="progress-section">
                <h3>DICAS UTILIZADAS</h3>
                <div className="hints-container">
                    {Array.from({ length: hintsUsed }).map((_, index) => (
                        <span key={index} className="hint-icon">💡</span>
                    ))}
                    <span style={{ fontSize: '0.8rem' }}>x{hintsUsed}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressPanel;
