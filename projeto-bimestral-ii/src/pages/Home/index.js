import './style.css'
import Table from '../../components/Table/index.js'


// Definição de dados
let data1 = {
    numero: 1,
    cliente: "João Silva",
    pedido: "X-Burger",
    data: "2024-03-28",
    hora: "12:30"
}

let data2 = {
    numero: 2,
    cliente: "Nilson Santos",
    pedido: "Coca-Cola",
    data: "2024-01-01",
    hora: "23:59"
}


// Página Home
export default function Home() {
    let tableHeadings = ["Pedido", "Cliente", "Lanche", "Data", "Hora"];
    let datalist = [data1, data2];
    
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

            <div className="container">
                <h1>Departamento de Pedidos</h1>
                <Table title="Lista de Pedidos em Aberto" headings={tableHeadings} data={datalist} nomeBotao="Atualizar" acaoBotao={() => {window.location.reload()}}/>
                <Table title="Histórico de Pedidos" headings={tableHeadings} data={datalist} />
                <Table title="Skibididop" headings={["skibidi", "dop", "dop"]} data={datalist} />
            </div>
        </>
    );
}