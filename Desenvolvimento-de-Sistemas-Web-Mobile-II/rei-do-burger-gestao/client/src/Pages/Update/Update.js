import "./style.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Update() {
    const { id } = useParams()
    
    const [formData, setFormData] = useState({
        meioPagamento: "dinheiro",
        delivery: false,
        status: "fazer",
        cliente: "",
        valor: 0,
        pedido: []
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/get/'+id)
            .then(res => {
                const fetchedData = res.data[0].data
                setFormData({
                    meioPagamento: fetchedData.meioPagamento,
                    delivery: fetchedData.delivery,
                    status: fetchedData.status,
                    cliente: fetchedData.cliente,
                    valor: fetchedData.valor,
                    pedido: fetchedData.pedido
                })
            })
            .catch(err => console.error(err))
        
    }, [])


    const orders = [
        {id: 1, name: "X-Burger"},
        {id: 2, name: "X-Salada"},
        {id: 3, name: "Hotdog"},
        {id: 4, name: "Coca-Cola"},
        {id: 5, name: "Pepsi"}
    ]

    const handleOrderChange = orderName => {
        setFormData(prevData => {
            const newOrder = prevData.pedido.includes(orderName)
                ? prevData.pedido.filter(order => order !== orderName)
                : [...prevData.pedido, orderName]
            return {...prevData, pedido: newOrder}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // Verifica se ao menos um pedido foi selecionado no formulario
        if (formData.pedido.length === 0) {
            alert("Selecione ao menos um pedido!")
            return
        }
        
        const data = {
            cliente: formData.cliente,
            meioPagamento: formData.meioPagamento,
            delivery: formData.delivery,
            status: formData.status,
            pedido: formData.pedido,
            valor: formData.valor
        }

        // Enviando os dados coletados
        axios.post(`http://localhost:8000/api/update/${id}`, data)
            .then(res => {
                console.log(res)
                alert("Pedido atualizado com Sucesso!");
                window.location.reload();
            })
            .catch(err => {
                console.error("Erro ao enviar o formulário:", err)
            })   
    }
    

    return(
        <>
            <div className="container-Add">
                <h1>Editar Pedido</h1>
                <div className="grade-Add">
                    <form className="add-form" onSubmit={handleSubmit}>
                        <label>Cliente:</label><br/>
                        <input
                            type="text"
                            placeholder="João Silva"
                            name="client-name"
                            value={formData.cliente}
                            onChange={e => {setFormData({...formData, cliente: e.target.value})}}
                            required
                        /><br/>
                        <br/>
                        <label>Delivery:</label><br/>
                        <input
                            type="radio"
                            id="nao"
                            name="delivery-options"
                            value="nao"
                            onChange={e => {setFormData({...formData, delivery: false})}}
                            checked={formData.delivery === false}
                            required
                            />
                        <label for="nao"> Não</label>
                        <input
                            type="radio"
                            id="sim"
                            name="delivery-options"
                            value="sim"
                            onChange={e => {setFormData({...formData, delivery: true})}}
                            checked={formData.delivery === true}
                            required
                        />
                        <label for="sim"> Sim</label><br/>
                        <br/>
                        <label>Meio de Pagamento:</label>
                        <select
                            id="payment-method"
                            name="payment-method"
                            value={formData.meioPagamento}
                            onChange={e => {setFormData({...formData, meioPagamento: e.target.value})}}
                        >
                            <option value="cartao-credito">Crédito</option>
                            <option value="cartao-debito">Débito</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="pix">PIX</option>
                        </select><br/>
                        <br/>
                        <div>
                            <label>Status:</label><br/>
                            <label> {/* Coloquei o LABEL acima do INPUT para o usuario selecionar a opcao clicando no texto, nao somente na bolinha, se aparecer algum conflito, considere mover o LABEL para BAIXO do INPUT */}
                                <input
                                    type="radio"
                                    id="fazer"
                                    name="status-options"
                                    value="fazer"
                                    onChange={e => {setFormData({...formData, status: e.target.value})}}
                                    checked={formData.status === "fazer"}
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
                                    onChange={e => {setFormData({...formData, status: e.target.value})}}
                                    checked={formData.status === "andamento"}
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
                                    onChange={e => {setFormData({...formData, status: e.target.value})}}
                                    checked={formData.status === "concluido"}
                                    required
                                />
                                Concluído
                            </label><br/>
                        </div>
                        <br/>

                        <label>Pedido:</label><br/>
                        {
                            orders.map(order => (
                                <label key={order.id}>
                                    <input
                                        type="checkbox"
                                        onChange={() => {handleOrderChange(order.name)}}
                                        checked={formData.pedido.includes(order.name)}
                                    />
                                    {order.name}
                                </label>
                            ))
                        }<br/>
                        <br/>

                        <label>Total:</label><br/>
                        <input
                            type="number"
                            placeholder="24.50"
                            min="0"
                            step="0.01"
                            name="total"
                            value={formData.valor}
                            onChange={e => {setFormData({...formData, valor: parseFloat(e.target.value)})}}
                            required
                        /><br/>
                       
                       <br/>
                        <button type="submit">Salvar Pedido</button>
                    </form>
                </div>

                <footer>
                © 2024 - Todos os direitos reservados.
                </footer>

            </div>
        </>
    )
}