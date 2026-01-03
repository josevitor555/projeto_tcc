import {
    validateRequiredFields,
    validateString,
    validateEnum
} from './validation.js';

// Níveis válidos de matemática
const NIVEIS_MATEMATICA = [
    "Aventureiro Iniciante: \"Tenho muita dificuldade em matemática.\"",
    "Explorador em Busca de Prática: \"Entendo o básico, mas me sinto inseguro.\"",
    "Desbravador Confiante: \"Gosto de matemática e entendo bem os conceitos.\"",
    "Mestre dos Números: \"Tenho facilidade e raramente sinto dificuldades.\""
];

// Códigos válidos de sala
const CODIGOS_SALA = [
    "SALA-01", "SALA-02", "SALA-03", "SALA-04", "SALA-05", "SALA-06", "SALA-07"
];

// Validação de dados de registro de usuário
const validateUserRegistration = (userData) => {
    // Validar campos obrigatórios
    const requiredFields = ['nome', 'apelido', 'nivelMatematica', 'nomeSala', 'codigoSala'];
    const requiredValidation = validateRequiredFields(userData, requiredFields);
    
    if (!requiredValidation.isValid) {
        return requiredValidation;
    }

    // Validar nome
    const nomeValidation = validateString(userData.nome, 'nome', 50, 1);
    if (!nomeValidation.isValid) {
        return nomeValidation;
    }

    // Validar apelido
    const apelidoValidation = validateString(userData.apelido, 'apelido', 30, 1);
    if (!apelidoValidation.isValid) {
        return apelidoValidation;
    }

    // Validar nível de matemática
    const nivelValidation = validateEnum(userData.nivelMatematica, 'nivelMatematica', NIVEIS_MATEMATICA);
    if (!nivelValidation.isValid) {
        return nivelValidation;
    }

    // Validar nome da sala
    const nomeSalaValidation = validateString(userData.nomeSala, 'nomeSala', 50, 1);
    if (!nomeSalaValidation.isValid) {
        return nomeSalaValidation;
    }

    // Validar código da sala
    const codigoSalaValidation = validateEnum(userData.codigoSala, 'codigoSala', CODIGOS_SALA);
    if (!codigoSalaValidation.isValid) {
        return codigoSalaValidation;
    }

    // Se todas as validações passaram
    return { isValid: true };
};

// Validação de dados de login de usuário
const validateUserLogin = (loginData) => {
    // Validar campos obrigatórios
    const requiredFields = ['nome', 'codigoSala'];
    const requiredValidation = validateRequiredFields(loginData, requiredFields);
    
    if (!requiredValidation.isValid) {
        return requiredValidation;
    }

    // Validar nome
    const nomeValidation = validateString(loginData.nome, 'nome', 50, 1);
    if (!nomeValidation.isValid) {
        return nomeValidation;
    }

    // Validar código da sala
    const codigoSalaValidation = validateEnum(loginData.codigoSala, 'codigoSala', CODIGOS_SALA);
    if (!codigoSalaValidation.isValid) {
        return codigoSalaValidation;
    }

    // Se todas as validações passaram
    return { isValid: true };
};

export {
    validateUserRegistration,
    validateUserLogin,
    NIVEIS_MATEMATICA,
    CODIGOS_SALA
};