import "./style.css";

// Função de Criação de Botões
function Botao({ nome, acao }) {
    return (
        <button type="submit" className="btn" onClick={acao}>
            {nome}
        </button>
    );
}

// Função Primária de Criação de Tabelas
export default function Table({ titulo, headings, data, nomeBotao, acaoBotao }) {
    return (
        <>
            <div className="section-header"> {/* Títulos e Botões Superiores */}
                <h2>{titulo}</h2>
                {(nomeBotao || acaoBotao) && <Botao nome={nomeBotao} acao={acaoBotao} />} {/* Condicional que cria botões apenas se for informado um NOME ou AÇÃO para o BOTÃO */}
            </div>

            <div className="section-content"> {/* Tabela */}
                <table>
                    <thead>
                        <tr>
                            {/* Mapear sobre a Lista de Títulos Informados para a Tabela e convertê-las em TAGS HTML (TableHeading) */}
                            {headings.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {/* Mapear sobre os Objetos Javascript da Prop. Data e convertê-los em TAGS HTML (TableRow) */}
                        {data.map((rowData, rowIndex) => (
                            <tr key={rowIndex}>
                                {/* Mapear sobre os Valores de cada Objeto da Prop. Data e convertê-los em TAGS HTML (TableData) */}
                                {Object.values(rowData).map((value, columnIndex) => (
                                    <td key={columnIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
