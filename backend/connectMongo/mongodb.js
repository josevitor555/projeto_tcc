
// Importar a ORM do MongoDB: mongoose
import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    try {

        // Cria uma URL de conexão com MongoDB
        const mongoURL = process.env.MONGO_URI || "mongodb://localhost:27017/myapp";

        // Cria uma conexão
        const conn = await mongoose.connect(mongoURL, {
            dbName: "projeto_tcc"
        });

        // Registra a conexão
        // console.log("Connected to MongoDB!", conn.connection.host);
        console.log("Connection database: ", conn.connection.name);
    } catch (error) {
        console.error(`Erro ao conectar: ${error}`);
    }
}

export default connectDB;