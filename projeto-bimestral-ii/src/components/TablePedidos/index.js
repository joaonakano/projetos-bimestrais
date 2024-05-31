import "./style.css"

export default function TablePedidos(props) {
    let titulo = props.title;
    let tableHeadings = props.headings;
    let tableData = props.data;

    return (
        <>
            {/* Títulos e Botões Superiores */}
            <div className="section-header">
                <h2>{titulo}</h2>

                {/* Condicional que cria um botão APENAS se for informado um nome no prop.botão */}
                {props.botao && (
                    <button type="submit" className="btn">{props.botao}</button>
                )}
            </div>

            {/* Tabela */}
            <div className="section-content">
                <table>

                    <thead>
                        <tr>
                            {tableHeadings.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {/* Mapear sobre os objetos javascript do Datalist */}
                        {tableData.map((data, dataIndex) => (
                            <tr key={dataIndex}>
                                {Object.values(data).map((value, valueIndex) => (
                                    <td key={valueIndex}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    );
}