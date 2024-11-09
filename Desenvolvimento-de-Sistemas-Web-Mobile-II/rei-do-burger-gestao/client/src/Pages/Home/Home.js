import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const [ordersList, setOrdersList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/get/all')
            .then((res) => {
                setOrdersList(res.data)
            })
    }, [])
    
    return(
    <>
        <h1>Pedidos</h1>    
        
        <ul>
                {ordersList.map((order) => {
                    const { documentID, data } = order;
                    return (
                        <li key={documentID}>
                            <h2>Cliente: {data.cliente}</h2>
                            <p>Valor: R$ {data.valor}</p>
                            <p>Status: {data.status}</p>
                            <p>Meio de Pagamento: {data.meioPagamento}</p>
                            <p>Delivery: {data.delivery ? 'Sim' : 'Não'}</p>
                            <h3>Pedido:</h3>
                            <ul>
                                {data.pedido && data.pedido.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
    </>
    )
}