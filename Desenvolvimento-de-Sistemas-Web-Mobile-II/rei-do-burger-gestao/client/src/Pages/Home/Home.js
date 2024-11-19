import { useState, useEffect } from 'react';
import axiosInstance from '../../Utils/AxiosInstance'

import RemoveButton from '../../Components/Button/Remove/Remove'
import UpdateButton from '../../Components/Button/Update/Update'
import RefreshButton from '../../Components/Button/Refresh/Refresh'

import Header from "../../Components/Header/Header"
import "./style.css"

export default function Home() {
    const [ordersList, setOrdersList] = useState([])

    useEffect(() => {
        getAllOrders()
    }, []);

    function getAllOrders() {
        // SINGLETON - axiosInstance
        axiosInstance.get('/get/all')
        .then((res) => {
            setOrdersList(res.data);
        })
        .catch(err => console.error("Erro ao buscar os pedidos:", err))
    }

    function sendDeleteRequest(orderID) {
        // SINGLETON - axiosInstance
        axiosInstance.delete(`/delete/${orderID}`)
            .then(res => console.log(res))
            .catch(err => console.error("Erro ao deletar o pedido:", err))
    }

    function handleRemoveOrder(orderID) {
        sendDeleteRequest(orderID)
        // Cria uma nova lista de pedidos removendo um pedido indesejado especificado
        const newOrdersList = ordersList.filter(item => item.documentID !== orderID)
        updateOrdersList(newOrdersList)
    }

    function updateOrdersList(newListData) {
        setOrdersList(newListData);
    }

    return (
        <>
            <Header />
            <div className='container-pedidos'>
                <h1>Pedidos</h1>
                <RefreshButton className="refresh-button" handleRefresh={getAllOrders} />
                <div className='grade-pedidos'>
                    {ordersList.map((order) => {
                        const { documentID, data } = order;
                        return (
                            <div key={documentID} className='pedido-item'>
                                <RemoveButton handleRemoveOrder={() => handleRemoveOrder(documentID)}/>
                                <UpdateButton id={documentID} />
                                <h2 className="header-card">{data.cliente}</h2>
                                <hr />
                                <p>Valor: R${data.valor}</p>
                                <p>Status: {data.status}</p>
                                <p>Meio de Pagamento: {data.meioPagamento}</p>
                                <p>Delivery: {data.delivery ? 'Sim' : 'Não'}</p>
                                <hr />
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
                    © Rei do Burger 2024 - Todos os direitos reservados.
                </footer>
            </div>
        </>
    );
}