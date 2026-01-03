// Importar o Gerenciador de estado nativo do React
import { useState } from "react";

// Importar Tipos do React
import type { ChangeEvent, FormEvent } from "react";

// Importar Estilo CSS
import "../styles/AuthPage.css";

// Mídia MP4
import videoSrc from "../assets/gravity_falls.mp4";

// 1. Interface para os dados do formulário
interface FormData {
    nome: string;
    apelido: string;
    nivelMatematica: string;
    nomeSala: string;
    codigoSala: string;
}

// 2. Interface para as mensagens de feedback
interface MessageState {
    type: "error" | "success" | "";
    text: string;
}

const AuthPage = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        apelido: "",
        nivelMatematica: "",
        nomeSala: "",
        codigoSala: ""
    });

    const [message, setMessage] = useState<MessageState>({
        type: "",
        text: ""
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validação: verifica se algum campo está vazio
        const fields = Object.values(formData);
        if (fields.some(value => value.trim() === "")) {
            setMessage({
                type: "error",
                text: "Por favor, preencha todos os campos."
            });
            return;
        }

        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({
                    type: "success",
                    text: data.message || "Usuário cadastrado com sucesso!"
                });

                // Limpa o formulário após sucesso
                setFormData({ nome: "", apelido: "", nivelMatematica: "", nomeSala: "", codigoSala: "" });
            } else {
                setMessage({
                    type: "error",
                    text: data.message || "Erro ao cadastrar usuário."
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Erro de conexão com o servidor."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Vídeo de Fundo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={videoSrc} type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>

            <div className="flex items-center justify-center min-h-screen bg-black/30">
                <form className="pixel-card" onSubmit={handleSubmit}>
                    <h2 className="pixel-title">Cadastrar-se</h2>

                    {/* Exibição de Mensagem */}
                    {message.text && (
                        <p className={`message-display ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                            {message.text}
                        </p>
                    )}

                    <div className="input-group">
                        <label className="pixel-label">Nome do participante</label>
                        <input
                            name="nome"
                            type="text"
                            className="pixel-input"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Seu Apelido</label>
                        <input
                            name="apelido"
                            type="text"
                            className="pixel-input"
                            value={formData.apelido}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Nível de Matemática</label>
                        <select
                            name="nivelMatematica"
                            className="pixel-input"
                            value={formData.nivelMatematica}
                            onChange={handleChange}
                        >
                            <option value="">Selecione sua experiência</option>
                            <option value="Aventureiro Iniciante: &quot;Tenho muita dificuldade em matemática.&quot;">Aventureiro Iniciante: Tenho muita dificuldade em matemática.</option>
                            <option value="Explorador em Busca de Prática: &quot;Entendo o básico, mas me sinto inseguro.&quot;">Explorador em Busca de Prática: Entendo o básico, mas me sinto inseguro.</option>
                            <option value="Desbravador Confiante: &quot;Gosto de matemática e entendo bem os conceitos.&quot;">Desbravador Confiante: Gosto de matemática e entendo bem os conceitos.</option>
                            <option value="Mestre dos Números: &quot;Tenho facilidade e raramente sinto dificuldades.&quot;">Mestre dos Números: Tenho facilidade e raramente sinto dificuldades.</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Nome da Sala</label>
                        <input
                            name="nomeSala"
                            type="text"
                            className="pixel-input"
                            value={formData.nomeSala}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label className="pixel-label">Código da Sala</label>
                        <select
                            name="codigoSala"
                            className="pixel-input"
                            value={formData.codigoSala}
                            onChange={handleChange}
                        >
                            <option value="">Selecione uma sala</option>
                            {[1, 2, 3, 4, 5, 6, 7].map(num => (
                                <option key={num} value={`SALA-0${num}`}>SALA-0{num}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="pixel-button"
                        disabled={loading}
                    >
                        {loading ? "Processando..." : "Próxima Etapa"}
                    </button>

                    <p className="pixel-footer">v 1.0 - Estilo: Gravity Falls</p>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;