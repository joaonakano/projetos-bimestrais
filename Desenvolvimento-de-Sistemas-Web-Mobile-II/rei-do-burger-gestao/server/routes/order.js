const orderController = require("../controller/order")
const userController = require("../controller/user")

// Importando o método ROUTER do Express para criar as Routes
const express = require("express")
const router = express.Router()

const authenticate = require("../middleware/authMiddleware")

// Criando as Routes de Pedidos
router.get("/get/all", authenticate, orderController.getAllOrders)        // * Interesting observation: the order in which router.get() methods are created is important, otherwise you can't get the /all orders!
router.get("/get/:id", authenticate, orderController.getSpecificOrder)
router.post("/create", authenticate, orderController.createOrder)
router.post("/update/:id", authenticate, orderController.updateOrder)
router.delete("/delete/:id", authenticate, orderController.deleteOrder)

router.post("/login", userController.login)

// Exportando as modificações feitas no Router
module.exports = router