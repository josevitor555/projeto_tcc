// Arquivo de índice para exportar todas as validações
import {
    validateUserRegistration,
    validateUserLogin,
    NIVEIS_MATEMATICA,
    CODIGOS_SALA
} from './userValidator.js';

import {
    validateRequiredFields,
    validateString,
    validateEnum,
    validateNumber
} from './validation.js';

// Exportar todas as funções de validação
export {
    // Validações de usuário
    validateUserRegistration,
    validateUserLogin,
    NIVEIS_MATEMATICA,
    CODIGOS_SALA,
    
    // Funções de validação genérica
    validateRequiredFields,
    validateString,
    validateEnum,
    validateNumber
};