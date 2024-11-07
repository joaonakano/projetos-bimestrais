// Pagina que exibe os pedidos do Banco de Dados

const express = require("express")
const router = express.Router()

// Importando o Controller dos Pedidos
const orderController = require("../controllers/orderController")

// Inicializando os Controllers para a Rota "/orders"
router.get("/all", orderController.getAllOrders)
router.get("/:id", orderController.getSpecificOrder)


module.exports = router;