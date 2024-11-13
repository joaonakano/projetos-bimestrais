const express = require("express")
const app = express()

// Importando e Utilizando o CORS para lidar com requisições de um outro domínio
const cors = require("cors")
app.use(cors())

// Inicializando os Serviços de Interpretação de Body-Request e Search-Query. Importante para pegar corretamente os dados de um BODY ou SearchQuery
app.use(express.json())
app.use(express.urlencoded())

// Solicitando as Configurações do Servidor
const {
    PORT,
    hostUrl,
    databaseName
} = require("./config/server")

// Importando o inicializador do Firebase e do MongoDB
const { initializeFirebaseApp } = require("./config/firebase")
const { connectToMongo } = require("./config/mongodb")

const initializeDatabase = () => {
    switch (databaseName) {
        case "firebase": 
            initializeFirebaseApp()
            break
        case "mongodb":
            connectToMongo()
            break
        default:
            console.error("Was not possible to initialize an available database!")
            break
    }
}

// Inicializando o servidor apropriado com base no nome definido na config
initializeDatabase()

// Importando as Rotas
const orders = require("./routes/order")

// Criando os Handlers de REQUEST
app.use("/api", orders)

// Inicializando o Servidor
app.listen(PORT, () => console.log(`-> Server is running at ${hostUrl}`))