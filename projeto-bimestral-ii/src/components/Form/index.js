import './style.css'

import Botao from '../Botao'

function Form({ pedidos, atualizar }) {
    function manusearSubmit(event) {
        event.preventDefault();
        
        const pedidoID = parseInt(document.forms['modifyForm']['pedidoID'].value);
        const chave = document.forms['modifyForm']['componente'].value;
        const novoValor = document.forms['modifyForm']['novoValor'].value;

        if (pedidoID < pedidos.length) {
            return atualizar(pedidoID, chave, novoValor);
        }
    }

    return (
        <div className="section">
            <div className="section-header">
                <h2>Modificar Pedido</h2>
            </div>

            <div className="section-content">
                <form id="modifyForm" onSubmit={manusearSubmit}>
                    <label>ID do Pedido:</label>
                    <input type="number" id="pedidoID" name="pedidoID" required />

                    <label>Componente a modificar:</label>
                    <select id="componente" name="componente" required>
                        <option value="cliente">Cliente</option>
                        <option value="pedido">Lanche</option>
                        <option value="data">Data</option>
                        <option value="hora">Hora</option>
                    </select>

                    <label>Novo Valor:</label>
                    <input type="text" id="novoValor" name="novoValor" required />

                    <Botao nome='Modificar' />
                </form>
            </div>
        </div>
    );
}

export default Form;
