import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from "../../Utils/NavigationContext"

import axiosInstance from "../../Utils/AxiosInstance"

import "../AddOrderForm/style.css" // Import the CSS from AddOrderForm

export default function Update() {
    const navigate = useNavigation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axiosInstance.get('/get/all');
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/login'); // Redirect to login page
                }
            }
        }

        fetchData()
    }, [navigate])

    // Armazena o ID do Pedido vindo da URL
    const { id } = useParams()
    const orderID = id
    
    const [formData, setFormData] = useState({
        meioPagamento: "dinheiro",
        delivery: false,
        status: "fazer",
        cliente: "",
        valor: 0,
        pedido: []
    })

    useEffect(() => {
        sendGetRequestForSpecificOrder(orderID)        
    }, [])

    const orders = [
        {id: 1, name: "X-Burger"},
        {id: 2, name: "X-Salada"},
        {id: 3, name: "Hotdog"},
        {id: 4, name: "Coca-Cola"},
        {id: 5, name: "Pepsi"}
    ]

    const statuses = [
        { id: 1, name: "A Fazer" },
        { id: 2, name: "Em Andamento" },
        { id: 3, name: "Concluído" }
    ]

    const sendGetRequestForSpecificOrder = orderID => {
        // SINGLETON - axiosInstance
        axiosInstance.get(`/get/${orderID}`)
            .then(res => {
                const fetchedData = res.data[0].data
                // Atualiza o estado do FormData com os dados recebidos pela requisição enviada
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
    }

    const sendPostRequest = async (data) => {
        // SINGLETON - axiosInstance
        try {
            await axiosInstance.post(`/update/${orderID}`, data)
            alert("Pedido atualizado com Sucesso")
        } catch (err) {
            if (err.response && err.response.status === 401) {
                navigate("/login")
            } else {
                console.error("Erro ao enviar o formulario:", err)
            }
        }

    }

    const handleOrderChange = orderName => {
        setFormData(prevData => {
            const newOrder = prevData.pedido.includes(orderName)
                ? prevData.pedido.filter(order => order !== orderName)
                : [...prevData.pedido, orderName]
            return {...prevData, pedido: newOrder}
        })
    }

    const handleStatusChange = statusName => {
        setFormData(prevData => {
            const newStatus = prevData.status === statusName ? "" : statusName
            return {...prevData, status: newStatus}
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
        sendPostRequest(data)
        navigate("/")
    }

    return(
        <>
            <div className="add-order-container">
                <h1>Editar Pedido</h1>
                <div className="add-order-grade">
                    <form className="add-order-form" onSubmit={handleSubmit}>
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
                        <label htmlFor="nao"> Não</label>
                        <input
                            type="radio"
                            id="sim"
                            name="delivery-options"
                            value="sim"
                            onChange={e => {setFormData({...formData, delivery: true})}}
                            checked={formData.delivery === true}
                            required
                        />
                        <label htmlFor="sim"> Sim</label><br/>
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
                            {
                                statuses.map(status => (
                                    <div key={status.id}>
                                        <input
                                            type="checkbox"
                                            id={`status-${status.id}`}
                                            onChange={() => { handleStatusChange(status.name) }}
                                            checked={formData.status === status.name}
                                        />
                                        <label htmlFor={`status-${status.id}`}>{status.name}</label>
                                    </div>
                                ))
                            }<br/>
                        </div>
                        <br/>

                        <label>Pedido:</label><br/>
                        {
                            orders.map(order => (
                                <div key={order.id}>
                                    <input
                                        type="checkbox"
                                        id={`pedido-${order.id}`}
                                        onChange={() => {handleOrderChange(order.name)}}
                                        checked={formData.pedido.includes(order.name)}
                                    />
                                    <label htmlFor={`pedido-${order.id}`}>{order.name}</label>
                                </div>
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