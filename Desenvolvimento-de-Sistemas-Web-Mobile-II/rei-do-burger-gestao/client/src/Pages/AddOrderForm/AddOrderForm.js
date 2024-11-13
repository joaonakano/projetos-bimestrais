import { useState } from "react";
import axios from "axios";

import "./style.css";

export default function AddOrderForm() {
    const [meioPagamento, setMeioPagamento] = useState("dinheiro");
    const [delivery, setDelivery] = useState(false);
    const [status, setStatus] = useState("fazer");
    const [cliente, setCliente] = useState("");
    const [valor, setValor] = useState(0);
    const [pedido, setPedido] = useState([]);

    const orders = [
        { id: 1, name: "X-Burger" },
        { id: 2, name: "X-Salada" },
        { id: 3, name: "Hotdog" },
        { id: 4, name: "Coca-Cola" },
        { id: 5, name: "Pepsi" }
    ];

    const handleOrderChange = orderName => {
        setPedido(prevSelected => {
            if (prevSelected.includes(orderName)) {
                return prevSelected.filter(order => order !== orderName);
            } else {
                return [...prevSelected, orderName];
            }
        });
    };

    function handleSubmit(event) {
        event.preventDefault();
        // Verifica se ao menos um pedido foi selecionado no formulario
        if (pedido.length === 0) {
            alert("Selecione ao menos um pedido!");
            return;
        }

        const data = {
            cliente,
            meioPagamento,
            delivery,
            status,
            pedido,
            valor
        };

        // Enviando os dados coletados
        axios.post("http://localhost:8000/api/create", data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error("Erro ao enviar o formulário:", err);
            });

        alert("Pedido cadastrado com Sucesso!");
        window.location.href="/";
    }

    return (
        <>
            <div className="container-Add">
                <h1>Adicionar Pedido</h1>
                <div className="grade-Add">
                    <form className="add-form" onSubmit={handleSubmit}>
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
                            <label>
                                <input
                                    type="radio"
                                    id="fazer"
                                    name="status-options"
                                    value="fazer"
                                    onChange={e => { setStatus(e.target.value) }}
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
                                    onChange={e => { setStatus(e.target.value) }}
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
                                    onChange={e => { setStatus(e.target.value) }}
                                    checked={status === "concluido"}
                                    required
                                />
                                Concluído
                            </label><br />
                        </div>
                        <br />

                        <label>Pedido:</label><br />
                        {
                            orders.map(order => (
                                <label key={order.id}>
                                    <input
                                        type="checkbox"
                                        onChange={() => { handleOrderChange(order.name) }}
                                    />
                                    {order.name}
                                </label>
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