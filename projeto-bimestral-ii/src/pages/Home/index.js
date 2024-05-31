import './style.css'
import TablePedidos from '../../components/TablePedidos/index.js'


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
        <div className="container">
            <h1>Departamento de Pedidos</h1>
            <TablePedidos title="Lista de Pedidos em Aberto" headings={tableHeadings} data={datalist} botao="sim"/>
            <TablePedidos title="Histórico de Pedidos" headings={tableHeadings} data={datalist} />
        </div>
    );
}