import { useState, useEffect } from 'react'
import axios from 'axios'

import "./style.css"

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
    <div className='container-pedidos'>
            <h1>Pedidos</h1>    
            <div className='grade-pedidos'>

                    {ordersList.map((order) => {
                        const { documentID, data } = order;
                        return (

                            <div key={documentID} className='pedido-item'>

                                <h2 className="header-card">{data.cliente}</h2>
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

                            </div>

                        );
                    })}

            </div>

            <footer>
                © 2024 - Todos os direitos reservados.
            </footer>

    </div>
    </>
    )
}