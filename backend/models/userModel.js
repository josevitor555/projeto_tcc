// Importar a ORM mongoose
import mongoose from 'mongoose';

// Criar um esquema para o usuário
const userSchema = new mongoose.Schema({
    nome: { type: String, required: true }, // Nome do Participante (Usuário)
    apelido: { type: String, required: true }, // Apelido
    
    // Nível de matemática baseado nas opções específicas
    nivelMatematica: { 
        type: String, 
        enum: [
            "Aventureiro Iniciante: \"Tenho muita dificuldade em matemática.\"",
            "Explorador em Busca de Prática: \"Entendo o básico, mas me sinto inseguro.\"",
            "Desbravador Confiante: \"Gosto de matemática e entendo bem os conceitos.\"",
            "Mestre dos Números: \"Tenho facilidade e raramente sinto dificuldades.\""
        ],
        required: true 
    },
    
    nomeSala: { type: String, required: true }, // Nome da Sala
    codigoSala: { type: String, required: true }, // Código da Sala (SALA-01 a SALA-07)
    
    // Dados de Jogo
    totalXP: { type: Number, default: 0 },
    currentLevel: { 
        type: String, 
        enum: ['Explorador', 'Desbravador', 'Experiente'], 
        default: 'Explorador' 
    },
    
    // Lógica para o Bônus de Crânio
    bonusEligible: { type: Boolean, default: true }

}, {
    timestamps: true, // Útil para saber quando o aluno se cadastrou
    collection: 'estudante'
});

// Criar um modelo de usuário com base no esquema
const User = mongoose.model('estudante', userSchema);

// Exportar o modelo de usuário
export default User;
