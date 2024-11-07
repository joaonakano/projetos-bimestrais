const express = require("express")
const cors = require("cors")

const app = express()
const firebaseFunctions = require('./config/firebase')

app.use(express.json())
app.use(cors())


// Importando as rotas
const orderRoute = require("./routes/orders")

// Inicializando o Firebase
firebaseFunctions.initializeFirebaseApp()

// Inicializando as Rotas
app.use("/api", orderRoute)


app.listen(8000, () => console.log('The server has started at http://localhost:8000'))