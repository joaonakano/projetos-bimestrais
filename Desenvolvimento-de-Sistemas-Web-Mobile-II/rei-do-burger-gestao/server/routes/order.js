const orderController = require("../controller/order")

// Importando o método ROUTER do Express para criar as Routes
const express = require("express")
const router = express.Router()

// Criando as Routes de Pedidos
router.get("/get/all", orderController.getAllOrders)        // * Interesting observation: the order in which router.get() methods are created is important, otherwise you can't get the /all orders!
router.get("/get/:id", orderController.getSpecificOrder)
router.post("/create", orderController.createOrder)
router.post("/update/:id", orderController.updateOrder)
router.delete("/delete/:id", orderController.deleteOrder)

// Exportando as modificações feitas no Router
module.exports = router