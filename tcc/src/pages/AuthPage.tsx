// Componentes do Shadcn
// import { Button } from "@/components/ui/button";

// Estilos do Componente PixelLogin
import "../styles/AuthPage.css";
import videoSrc from "../assets/gravity_falls.mp4";

// Componente
const PixelLogin = () => {
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
            
            <div className="flex items-center justify-center min-h-screen">
                <div className="pixel-card">
                    <h2 className="pixel-title">Cadastrar-se</h2>

                    <div className="input-group">
                        <label className="pixel-label">Nome do participante </label>
                        <input type="text" className="pixel-input" placeholder="Digite seu nome..." />
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Seu Apelido</label>
                        <input type="text" className="pixel-input" placeholder="Ex: O Desbravador" />
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Como você se sente em relação à matemática? </label>
                        <select className="pixel-input">
                            <option value="">Selecione sua experiência</option>
                            <option value="iniciante">Aventureiro Iniciante: Tenho muita dificuldade em matemática</option>
                            <option value="pratica">Explorador em Busca de Prática: Entendo o básico, mas me sinto inseguro</option>
                            <option value="confiante">Desbravador Confiante: Gosto de matemática e entendo bem os conceitos</option>
                            <option value="mestre">Mestre dos Números: Tenho facilidade e raramente sinto dificuldades</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Nome da Sala </label>
                        <input type="text" className="pixel-input" />
                    </div>

                    {/* Salas Disponpiveis */}
                    <div className="input-group">
                        <label className="pixel-label">Código da Sala</label>
                        <select className="pixel-input">
                            <option value="">Selecione uma sala</option>
                            <option value="SALA-01">SALA-01</option>
                            <option value="SALA-02">SALA-02</option>
                            <option value="SALA-03">SALA-03</option>
                            <option value="SALA-04">SALA-04</option>
                            <option value="SALA-05">SALA-05</option>
                            <option value="SALA-06">SALA-06</option>
                            <option value="SALA-07">SALA-07</option>
                        </select>
                    </div>

                    <button className="pixel-button">
                        Próxima Etapa
                    </button>

                    <p className="pixel-footer">v 1.0 - Paleta: Gravity Falls</p>
                </div>
            </div>
        </div>
    );
};

export default PixelLogin;
