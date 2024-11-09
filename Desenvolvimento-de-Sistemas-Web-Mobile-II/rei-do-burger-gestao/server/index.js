const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

// Inicializando os Serviços de Interpretação de Body-Request e Search-Query. Importante para pegar corretamente os dados de um BODY ou SearchQuery
app.use(express.json())
app.use(express.urlencoded())

// Inicializando o Serviço do Firebase
const { initializeFirebaseApp } = require("./config/firebase")
initializeFirebaseApp()

// Solicitando as Configurações do Servidor
const {
    PORT,
    hostUrl
} = require("./config/server")

// Importando as Rotas
const orders = require("./routes/order")

// Criando os Handlers de REQUEST
app.use("/api", orders)

// Inicializando o Servidor
app.listen(PORT, () => console.log(`-> Server is running at ${hostUrl}`))