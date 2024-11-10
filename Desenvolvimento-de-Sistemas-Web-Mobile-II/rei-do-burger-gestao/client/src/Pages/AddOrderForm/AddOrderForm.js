import { useState } from "react"
import axios from "axios"

import "./style.css"

export default function AddOrderForm() {
    const [paymentMethod, setPaymentMethod] = useState("dinheiro")
    const [delivery, setDelivery] = useState(false)
    const [status, setStatus] = useState("fazer")
    const [client, setClient] = useState("")
    const [total, setTotal] = useState(0)
    const [order, setOrder] = useState([])

    const orders = [
        {id: 1, name: "X-Burger"},
        {id: 2, name: "X-Salada"},
        {id: 3, name: "Hotdog"},
        {id: 4, name: "Coca-Cola"},
        {id: 5, name: "Pepsi"}
    ]

    const handleOrderChange = orderName => {
        setOrder(prevSelected => {
            if(prevSelected.includes(orderName)) {
                return prevSelected.filter(order => order !== orderName)
            } else {
                return [...prevSelected, orderName]
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // Verifica se ao menos um pedido foi selecionado no formulario
        if (order.length === 0) {
            alert("Selecione ao menos um pedido!")
            return
        }
        
        const data = {
            client,
            paymentMethod,
            delivery,
            status,
            order,
            total
        }

        // Enviando os dados coletados
        axios.post("http://localhost:8000/api/create", data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error("Erro ao enviar o formulário:", err)
            })
        
        alert("Pedido cadastrado com Sucesso!'")
        window.location.reload()
    }
    
    return(
        <>
            <h1>Adicionar Pedido</h1>

            <form className="add-form" onSubmit={handleSubmit}>
                <label>Cliente:</label><br/>
                <input
                    type="text"
                    placeholder="João Silva"
                    name="client-name"
                    value={client}
                    onChange={e => {setClient(e.target.value)}}
                    required
                /><br/>

                <label>Delivery:</label><br/>
                <input
                    type="radio"
                    id="nao"
                    name="delivery-options"
                    value="nao"
                    onChange={e => {setDelivery(false)}}
                    checked={delivery === false}
                    required
                    />
                <label for="nao">Não</label>
                <input
                    type="radio"
                    id="sim"
                    name="delivery-options"
                    value="sim"
                    onChange={e => {setDelivery(true)}}
                    required
                />
                <label for="sim">Sim</label><br/>

                <label>Meio de Pagamento:</label>
                <select
                    id="payment-method"
                    name="payment-method"
                    value={paymentMethod}
                    onChange={e => {setPaymentMethod(e.target.value)}}
                >
                    <option
                        value="cartao-credito"
                    >Crédito
                    </option>

                    <option
                        value="cartao-debito"
                        >Débito
                    </option>

                    <option
                        value="dinheiro"
                        checked={paymentMethod === "dinheiro"}
                    >Dinheiro
                    </option>
                    
                    <option
                        value="pix"
                    >PIX</option>
                </select><br/>

                <div>
                    <label>Status:</label><br/>
                    <label> {/* Coloquei o LABEL acima do INPUT para o usuario selecionar a opcao clicando no texto, nao somente na bolinha, se aparecer algum conflito, considere mover o LABEL para BAIXO do INPUT */}
                        <input
                            type="radio"
                            id="fazer"
                            name="status-options"
                            value="fazer"
                            onChange={e => {setStatus(e.target.value)}}
                            checked={status === "fazer"}
                            required
                            />
                        A Fazer
                    </label>

                    <label>
                        <input 
                            type="radio"
                            id="andamento"
                            name="status-options"
                            value="andamento"
                            onChange={e => {setStatus(e.target.value)}}
                            checked={status === "andamento"}
                            required
                            />
                        Em Andamento
                    </label>

                    <label>
                        <input
                            type="radio"
                            id="concluido"
                            name="status-options"
                            value="concluido"
                            onChange={e => {setStatus(e.target.value)}}
                            checked={status === "concluido"}
                            required
                        />
                        Concluído
                    </label><br/>
                </div>

                <label>Pedido:</label><br/>
                {
                    orders.map(order => (
                        <label key={order.id}>
                            <input
                                type="checkbox"
                                onChange={() => {handleOrderChange(order.name)}}
                            />
                            {order.name}
                        </label>
                    ))
                }<br/>
               
                <label>Total:</label><br/>
                <input
                    type="number"
                    placeholder="24.50"
                    min="0"
                    step="0.01"
                    name="total"
                    value={total}
                    onChange={e => {setTotal(e.target.value * 1)}}
                    required
                /><br/>

                <button type="submit">Registrar Pedido</button>
            </form>
        </>
    )
}