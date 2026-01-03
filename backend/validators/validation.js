/**
 * Funções genéricas de validação
 */

// Validação de campos obrigatórios
const validateRequiredFields = (obj, requiredFields) => {
    const missingFields = [];
    
    for (const field of requiredFields) {
        if (!obj[field] || obj[field].toString().trim() === '') {
            missingFields.push(field);
        }
    }
    
    if (missingFields.length > 0) {
        return {
            isValid: false,
            error: `Os seguintes campos são obrigatórios: ${missingFields.join(', ')}`
        };
    }
    
    return { isValid: true };
};

// Validação de string
const validateString = (value, fieldName, maxLength = 100, minLength = 1) => {
    if (typeof value !== 'string') {
        return {
            isValid: false,
            error: `${fieldName} deve ser uma string`
        };
    }
    
    const trimmedValue = value.trim();
    
    if (trimmedValue.length < minLength) {
        return {
            isValid: false,
            error: `${fieldName} deve ter pelo menos ${minLength} caractere(s)`
        };
    }
    
    if (trimmedValue.length > maxLength) {
        return {
            isValid: false,
            error: `${fieldName} não deve exceder ${maxLength} caracteres`
        };
    }
    
    return { isValid: true };
};

// Validação de enum (valores permitidos)
const validateEnum = (value, fieldName, validValues) => {
    if (!validValues.includes(value)) {
        return {
            isValid: false,
            error: `${fieldName} inválido. Valores permitidos: ${validValues.join(', ')}`
        };
    }
    
    return { isValid: true };
};

// Validação de número
const validateNumber = (value, fieldName, min = null, max = null) => {
    if (typeof value !== 'number') {
        return {
            isValid: false,
            error: `${fieldName} deve ser um número`
        };
    }
    
    if (min !== null && value < min) {
        return {
            isValid: false,
            error: `${fieldName} deve ser maior ou igual a ${min}`
        };
    }
    
    if (max !== null && value > max) {
        return {
            isValid: false,
            error: `${fieldName} deve ser menor ou igual a ${max}`
        };
    }
    
    return { isValid: true };
};

export {
    validateRequiredFields,
    validateString,
    validateEnum,
    validateNumber
};