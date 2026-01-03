// Importtar Express
import express from 'express';

// Importar o Morgan para registro de logs
import morgan from 'morgan';

// Importar o AXIOS HTTP
// import axios from 'axios';

// Importar o dot env para uppar variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config();

// Importar o CORS para permitir requisições cross-origin
import cors from 'cors';

// Importar a conexão com MongoDB
import connectionMongo from './connectMongo/mongodb.js';

// Importar auth routes
import authRoutes from './routes/authRoutes.js';

// Criar aplicativo express
const app = express();

// Registro de logs
app.use(morgan('dev')); // Com formato dev

// Middlewares
app.use(cors({
  origin: '*', // Permite requisições cross-origin de qualquer origem
  credentials: true, // Permite o envio de cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite os métodos HTTP
  allowedHeaders: ['Content-Type', 'Authorization'], // Permite os headers
  exposedHeaders: ['Access-Control-Allow-Origin'] // Permite os headers
})); // Permite requisições cross-origin

// Usando o Middleware do Express para parsear JSON
app.use(express.json());

// Rota principal para autenticação (Módulo 1)
app.use('/api/auth', authRoutes);

// Estabelecer conexão com o MongoDB (Logger de conexão promisse)
connectionMongo()
  .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso!'))
  .catch((error) => console.error('Erro ao conectar com o MongoDB:', error));

// Definindo a Porta
const port = process.env.PORT || 3000;

// Servidor ouvindo na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
