
// Importações
import { useState } from 'react';

// Importações de estilos CSS
import "../../styles/ChatTutor.css";

// Componente do ChatTutor
const ChatTutor = ({ isLeader = true }) => {
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div className="chat-tutor-container col-span-4 row-span-8 col-start-3 row-start-2">
            <div className="messages-area">
                
                <div className="message tutor-message">
                    <div className="message-header">
                        <span className="tutor-name">ESPÍRITO DE AL-KHWARIZMI</span>
                        <span className="message-time text-lg">11:37</span>
                    </div>
                    <div className="message-body">
                        <p className='flex items-center gap-2'>
                            <span className='font-semibold text-2xl'> Saudações, heróis da lógica! </span>
                            <i className="hn hn-pencil-ruler-solid"></i>
                        </p>
                        <p className='text-xl mt-2'>Bem-vindos à câmara secreta de Al-Khwarizmi. Para escapar da maldição, vocês devem resolver enigmas matemáticos antigos antes que a porta se feche para sempre!</p>
                        <p className='mt-2 mb-2 text-xl'><strong>Regras da Missão:</strong></p>
                        <ul>
                            <li className='text-xl'><strong>1 - A Lei do Conhecimento Mutuário:</strong> Heróis, a união faz a força! Cada acerto garante 100 XP para todos do grupo. Se alguém travar, usem o chat para debater a lógica!</li>
                            <li className='mt-2 text-xl'><strong>2 - O Guardião da Câmara:</strong> Eu nunca revelarei o segredo (a resposta) final. Se pedirem ajuda, darei uma Dica Socrática. Mas atenção: cada dica consome uma pequena parte do tesouro (XP) da questão atual.</li>
                            <li className='mt-2 text-xl'><strong>3 - O Desafio contra o Tempo:</strong> Cada enigma tem um tempo de respiração. Respostas rápidas garantem Bônus de Velocidade. Não deixem o cronômetro zerar, ou o enigma ficará mais difícil!</li>
                            <li className='mt-2 text-xl'><strong>4 - O Ritual da Liderança:</strong> Somente o Líder Escolhido possui a chave para enviar a resposta final após o consenso do grupo. Escolham bem quem guiará a próxima etapa!</li>
                            <li className='mt-2 text-xl'><strong>5 - Regra do "Crânio de Ouro" </strong>Escutem bem, mortais! Existe um tesouro escondido de +100 XP destinado apenas aos que possuem a 'Mente de Crânio'. Para recebê-lo ao final das 9 provas, vocês não devem cometer erros, não devem implorar por minhas dicas e jamais devem deixar o tempo se esgotar. Somente assim somarão 1.000 XP e seu nome será gravado nas paredes desta câmara. Estão à altura do desafio?</li>
                        </ul>
                        <p className='mt-2 text-xl'>O grupo está pronto para enfrentar os desafios de Al-Khwarizmi?</p>
                    </div>
                </div>

                <div className="message group-message">
                    <div className="message-header">
                        <span className="player-name">Herói da Lógica (Líder)</span>
                    </div>
                    <div className="message-body">
                        <span className='text-xl'>
                            Estamos prontos para enfrentar os desafios de Al-Khwarizmi!
                        </span>
                    </div>
                </div>

                <div className="message tutor-message">
                    <div className="message-header">
                        <span className="tutor-name">ESPÍRITO DE AL-KHWARIZMI</span>
                        <span className="message-time text-lg">11:37</span>
                    </div>
                    <div className="message-body">
                        <p className='flex items-center gap-2'>
                            <span className='font-light text-xl'> Que ótima animação! O espírito de Al-Khwarizmi reconhece sua determinação. Clique no botão "ESTOU PREPARADO" para começar a decifrar os primeiros códigos matemáticos! </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="chat-footer">
                {!gameStarted && isLeader ? (
                    <button 
                        className="pixel-action-btn"
                        onClick={() => setGameStarted(true)}
                    >
                        ESTOU PREPARADO!
                    </button>
                ) : (
                    <div className="input-wrapper">
                        <input type="text" placeholder="Decifre o enigma ou compartilhe sua descoberta..." className="chat-input" />
                        <button className="send-btn">ENVIAR</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatTutor;