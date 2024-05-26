import './style.css'

export default function Home() {
    return (
        <>
            <div class="container">
                <header>
                    <h1>Departamento de Pedidos</h1>

                    <div class="section">
                        <div class="section-header">
                            <h2>Lista de Pedidos em Aberto</h2>
                            <button class="btn">Atualizar</button>
                        </div>

                        <div class="section-content">
                            <table>
                            <thead>
                                <tr>
                                <th>Pedido</th>
                                <th>Cliente</th>
                                <th>Lanche</th>
                                <th>Data</th>
                                <th>Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>João Silva</td>
                                <td>X-Burguer</td>
                                <td>2024-03-28</td>
                                <td>12:30</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Maria Souza</td>
                                <td>Combo Burguer</td>
                                <td>2024-03-28</td>
                                <td>13:15</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </header>

            <div class="section">
                <div class="section-header">
                    <h2>Histórico de Pedidos</h2>
                </div>

                <div class="section-content">
                    <table>
                        <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Cliente</th>
                            <th>Lanche</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3</td>
                            <td>Ana Santos</td>
                            <td>X-Tudo</td>
                            <td>2024-03-27</td>
                            <td>19:00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Carlos Oliveira</td>
                            <td>Burguer de Frango</td>
                            <td>2024-03-27</td>
                            <td>20:45</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>Modificar Pedido</h2>
                </div>

                <div class="section-content">
                    <form id="modifyForm">
                        <label for="pedidoId">ID do Pedido:</label>
                        <input type="number" id="pedidoId" name="pedidoId" required />
                        <label for="componente">Componente a modificar:</label>
                        <select id="componente" name="componente" required>
                        <option value="cliente">Cliente</option>
                        <option value="lanche">Lanche</option>
                        <option value="data">Data</option>
                        <option value="hora">Hora</option>
                        </select>
                        <label for="novoValor">Novo Valor:</label>
                        <input type="text" id="novoValor" name="novoValor" required />
                        <button type="submit" class="btn">Modificar</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
}