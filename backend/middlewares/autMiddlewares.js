// Importar o jsonwebtoken
import jwt from "jsonwebtoken";

// Função para verificar Token de Usuário
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Pega apenas o <token>

    // Checar se o token existe
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Tentar decodificar o token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        console.log("Token invalid or expired", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}

// Exportar o middleware de verificação de token
export default verifyToken;