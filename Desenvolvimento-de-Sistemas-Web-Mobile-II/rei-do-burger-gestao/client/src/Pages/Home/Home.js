import { useState, useEffect } from 'react';
import axios from 'axios'

import RemoveButton from '../../Components/Button/Remove/Remove'
import UpdateButton from '../../Components/Button/Update/Update'
import RefreshButton from '../../Components/Button/Refresh/Refresh'

import Header from "../../Components/Header/Header"
import "./style.css"

export default function Home() {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/get/all')
            .then((res) => {
                setOrdersList(res.data);
            });
    }, []);

    function refreshOrders() {
        axios.get('http://localhost:8000/api/get/all')
        .then((res) => {
            setOrdersList(res.data);
        });
    }

    function updateOrdersList(newListData) {
        setOrdersList(newListData);
    }

    function getOrdersList() {
        return ordersList;
    }

    return (
        <>
            <Header />
            <div className='container-pedidos'>
                <h1>Pedidos</h1>
                <RefreshButton className="refresh-button" handleRefresh={refreshOrders} />
                <div className='grade-pedidos'>
                    {ordersList.map((order) => {
                        const { documentID, data } = order;
                        return (
                            <div key={documentID} className='pedido-item'>
                                <RemoveButton id={documentID} getOrdersList={getOrdersList} updateOrdersList={updateOrdersList} />
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