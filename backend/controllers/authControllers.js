// Importar Dot Env para uppar variáveis de ambiente

import dotenv from 'dotenv'
dotenv.config()

// Importar Bcrypt
import bcrypt from 'bcrypt'

// Importar Json Web Token
import jwt from 'jsonwebtoken'


// Importar o Modelo de Usuário MongoDB
import User from '../models/UserModel.js'

// Importar as funções de validação
import { validateUserRegistration, validateUserLogin } from '../validators/userValidator.js'

// Gerenciar usuários em funções assíncronas

// 1. Cadastrar usuário
const register = async (req, res) => {
    try {
        const { nome, apelido, nivelMatematica, nomeSala, codigoSala } = req.body;
        
        // Validar os dados de registro do usuário
        const validation = validateUserRegistration({ nome, apelido, nivelMatematica, nomeSala, codigoSala });
        
        if (!validation.isValid) {
            return res.status(400).json({ message: validation.error });
        }
        
        // Verificar se o usuário já existe
        const usuarioExistente = await User.findOne({ nome, codigoSala });
        if (usuarioExistente) {
            return res.status(400).json({ message: "Usuário já cadastrado nesta sala" });
        }
        
        // Criar novo usuário passando os campos obrigatórios
        const novoUsuario = new User({
            nome,
            apelido,
            nivelMatematica,
            nomeSala,
            codigoSala
        });
        
        // Salvar no banco de dados MongoDB
        await novoUsuario.save();
        
        // Retornar sucesso e o ID do usuário
        res.status(201).json({ 
            message: "Usuário cadastrado com sucesso", 
            userId: novoUsuario._id 
        });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}

// Login do usuário
const login = async (req, res) => {
    try {
        const { nome, codigoSala } = req.body;
        
        // Validar os dados de login do usuário
        const validation = validateUserLogin({ nome, codigoSala });
        
        if (!validation.isValid) {
            return res.status(400).json({ message: validation.error });
        }
        
        // Procurar usuário pelo nome e código da sala
        const usuario = await User.findOne({ nome, codigoSala });
        
        // Verificar se o usuário existe
        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        
        // Gerar token JWT
        const token = jwt.sign(
            { userId: usuario._id, nome: usuario.nome, codigoSala: usuario.codigoSala },
            process.env.JWT_SECRET || "fallback_secret",
            { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        );
        
        // Retornar sucesso e o token JWT
        res.status(200).json({ 
            message: "Login realizado com sucesso", 
            token,
            user: {
                id: usuario._id,
                nome: usuario.nome,
                apelido: usuario.apelido,
                nivelMatematica: usuario.nivelMatematica,
                nomeSala: usuario.nomeSala,
                codigoSala: usuario.codigoSala
            }
        });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}

// Sair do sistema
const logout = async (req, res) => {
    try {
        // Em um sistema com JWT stateless, o logout é geralmente feito no frontend
        // limpando o token. No backend, podemos implementar uma blacklist de tokens
        // caso necessário, mas para este caso, apenas retornamos uma mensagem de sucesso.
        
        res.status(200).json({ message: "Logout realizado com sucesso" });
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}

// Exportar as funções em um objeto
export { register, login, logout }
