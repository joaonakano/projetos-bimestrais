import { useState } from "react";
import axiosInstance from "../../Utils/AxiosInstance"

import "./style.css";

export default function AddOrderForm() {
    const [meioPagamento, setMeioPagamento] = useState("dinheiro")
    const [delivery, setDelivery] = useState(false)
    const [status, setStatus] = useState([])
    const [cliente, setCliente] = useState("")
    const [valor, setValor] = useState(0)
    const [pedido, setPedido] = useState([])

    const orders = [
        { id: 1, name: "X-Burger" },
        { id: 2, name: "X-Salada" },
        { id: 3, name: "Hotdog" },
        { id: 4, name: "Coca-Cola" },
        { id: 5, name: "Pepsi" }
    ];

    const statuses = [
        { id: 1, name: "A Fazer" },
        { id: 2, name: "Em Andamento" },
        { id: 3, name: "Concluído" }
    ];

    const sendPostRequest = data => {
        // SINGLETON - axiosInstance
        axiosInstance.post("/create", data)
            .then(res => {
                console.log(res)
                alert("Pedido cadastrado com Sucesso!")
            })
            .catch(err => {
                console.error("Erro ao enviar o formulário:", err)
            });
    }

    const handleOrderChange = orderName => {
        // Valida se algum pedido já armazenado conflita com um pedido a ser adicionado
        setPedido(prevSelected => {
            if (prevSelected.includes(orderName)) {
                return prevSelected.filter(order => order !== orderName)
            } else {
                return [...prevSelected, orderName]
            }
        });
    };

    const handleStatusChange = statusName => {
        // Valida se algum status já armazenado conflita com um status a ser adicionado
        setStatus(prevSelected => {
            if (prevSelected.includes(statusName)) {
                return prevSelected.filter(status => status !== statusName)
            } else {
                return [...prevSelected, statusName]
            }
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Verifica se ao menos um pedido foi selecionado no formulario
        if (pedido.length === 0) {
            alert("Selecione ao menos um pedido!")
            return
        }

        const data = {
            cliente,
            meioPagamento,
            delivery,
            status,
            pedido,
            valor
        };
        
        // Enviar uma requisição de POST para o servidor com os dados já formatados
        sendPostRequest(data)
        window.location.href="/"
    }

    return (
        <>
            <div className="add-order-container">
                <h1>Adicionar Pedido</h1>
                <div className="add-order-grade">
                    <form className="add-order-form" onSubmit={handleSubmit}>
                        <label>Cliente:</label><br />
                        <input
                            type="text"
                            placeholder="João Silva"
                            name="client-name"
                            value={cliente}
                            onChange={e => { setCliente(e.target.value) }}
                            required
                        /><br />
                        <br />
                        <label>Delivery:</label><br />
                        <input
                            type="radio"
                            id="nao"
                            name="delivery-options"
                            value="nao"
                            onChange={e => { setDelivery(false) }}
                            checked={delivery === false}
                            required
                        />
                        <label htmlFor="nao"> Não</label>
                        <input
                            type="radio"
                            id="sim"
                            name="delivery-options"
                            value="sim"
                            onChange={e => { setDelivery(true) }}
                            required
                        />
                        <label htmlFor="sim"> Sim</label><br />

                        <br />
                        <label>Meio de Pagamento:</label>
                        <select
                            id="payment-method"
                            name="payment-method"
                            value={meioPagamento}
                            onChange={e => { setMeioPagamento(e.target.value) }}
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
                                checked={meioPagamento === "dinheiro"}
                            >Dinheiro
                            </option>

                            <option
                                value="pix"
                            >PIX</option>
                        </select><br />
                        <br />
                        <div>
                            <label>Status:</label><br />
                            {
                                statuses.map(status => (
                                    <div key={status.id}>
                                        <input
                                            type="checkbox"
                                            id={`status-${status.id}`}
                                            onChange={() => { handleStatusChange(status.name) }}
                                        />
                                        <label htmlFor={`status-${status.id}`}>{status.name}</label>
                                    </div>
                                ))
                            }<br />
                        </div>
                        <br />

                        <label>Pedido:</label><br />
                        {
                            orders.map(order => (
                                <div key={order.id}>
                                    <input
                                        type="checkbox"
                                        id={`pedido-${order.id}`}
                                        onChange={() => { handleOrderChange(order.name) }}
                                    />
                                    <label htmlFor={`pedido-${order.id}`}>{order.name}</label>
                                </div>
                            ))
                        }<br />
                        <br />

                        <label>Total:</label><br />
                        <input
                            type="number"
                            placeholder="24.50"
                            min="0"
                            step="0.01"
                            name="total"
                            value={valor}
                            onChange={e => { setValor(e.target.value * 1) }}
                            required
                        /><br />

                        <br />
                        <button type="submit">Registrar Pedido</button>
                    </form>
                </div>

                <footer>
                    © 2024 - Todos os direitos reservados.
                </footer>

            </div>
        </>
    );
}