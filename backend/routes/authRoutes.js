// Importar o Express
import express from 'express';

// Importar o auth controller
import * as authControllers from '../controllers/authControllers.js';
// O "*" indica que queremos importar todas as funções controladores

// Importar o VerifyToken
import verifyToken from '../middlewares/autMiddlewares.js';

// Cria uma nova rota
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', authControllers.register);

// Rota para fazer login do usuário
router.post('/login', authControllers.login);

// Rota para sair do sistema
router.get('/logout', verifyToken, authControllers.logout);

// Exportar rota
export default router;
