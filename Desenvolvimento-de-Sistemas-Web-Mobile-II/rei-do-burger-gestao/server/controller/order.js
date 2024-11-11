const orderModel = require("../model/order")

module.exports = {
    // R(EAD)- Ler todos os documentos do Firestore na coleção "Pedidos" 
    getAllOrders: async (req, res) => {
        let orders
        orders = await orderModel.fetchAllDocuments("pedidos")
        res.type("json")
        res.send(orders)
    },

    // R(EAD) - Ler um documento específico do Firestore na coleção "Pedidos"
    getSpecificOrder: async (req, res) => {
        let documentID = req.params.id,
            order
        order = await orderModel.fetchDocument(documentID, "pedidos")
        res.type("json")
        res.send(order)
    },

    // C(REATE) - Criar um documento na coleção "Pedidos" do Firestore
    createOrder: async (req, res) => {
        let data = req.body
        const uploadData = await orderModel.createDocument(data, "pedidos")
        res.type("text/html")
        res.send("Pedido criado com sucesso!")
    },

    // D(ELETE) - Remover um documento na coleção "Pedidos" do Firestore
    deleteOrder: async (req, res) => {
        let documentID = req.params.id
        const deleteData = await orderModel.deleteDocument(documentID, "pedidos")
        res.type("text/html")
        res.send("Pedido removido com sucesso!")
    },

    // U(PDATE) - Atualizar as informações de um docuemtno na coleção "Pedidos" do Firestore
    updateOrder: async (req, res) => {
        let documentID = req.params.id,
            data = req.body
        const updateData = await orderModel.updateDocument(documentID, "pedidos", data)
        res.type("text/html")
        res.send("Pedido atualizado com sucesso!")
    }
}