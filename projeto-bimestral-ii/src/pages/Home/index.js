import './style.css';

import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import Form from '../../components/Form'

const tableHeadings = ["Pedido", "Cliente", "Lanche", "Data", "Hora"];
    
const pedidosPadrao = [
    {
        numero: 0,
        cliente: "João Silva",
        pedido: "X-Burger",
        data: "2024-03-28",
        hora: "12:30"
    },
    {
        numero: 1,
        cliente: "Nilson Santos",
        pedido: "Coca-Cola",
        data: "2024-01-01",
        hora: "23:59"
    }
];

function Home() {
    const [pedidos, setPedidos] = useState(() => { // Hook 1 - useState para guardar a lista Pedidos
        const pedidosStorage = localStorage.getItem('pedidos');
        return pedidosStorage ? JSON.parse(pedidosStorage) : pedidosPadrao; // Condicional se caso seja a primeira inicialização
    });

    useEffect(() => { // Hook 3 - useEffect para sincronizar o LocalStorage a cada alteração na lista Pedidos
        const pedidosFormatados = JSON.stringify(pedidos);
        localStorage.setItem('pedidos', pedidosFormatados);
    }, [pedidos]);

    function atualizarPedidos(pedidoID, chave, valor) {
        const novosPedidos = [...pedidos];
        novosPedidos[pedidoID][chave] = valor;
        setPedidos(novosPedidos);
    }

    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <div className="container">
                <h1>Departamento de Pedidos</h1>

                {/* Componente - TABLE + BOTÃO */}
                <Table
                    titulo="Lista de Pedidos em Aberto"
                    headings={tableHeadings}
                    data={pedidos}
                    nomeBotao="Atualizar"
                    acaoBotao={() => { window.location.reload() }}
                />

                {/* Componente - TABLE */}
                <Table
                    titulo="Histórico de Pedidos"
                    headings={tableHeadings}
                    data={pedidos}
                />

                {/* Componente - FORMULÁRIO */}
                <Form atualizar={atualizarPedidos} pedidos={pedidos} />
            </div>
        </>
    );
}

export default Home;
