import "./style.css"

function Botao(props){
    let botao = props.nome;
    let acao = props.acao;

    return (
        <button type="submit" className="btn" onClick={acao}>{botao}</button>
    );
}

export default function Table(props) {
    let titulo = props.title;
    let tableHeadings = props.headings;
    let tableData = props.data;

    return (
        <>
            {/* Títulos e Botões Superiores */}
            <div className="section-header">
                <h2>{titulo}</h2>

                {(
                    props.nomeBotao || props.acaoBotao
                ) && (
                    <Botao nome={props.nomeBotao} acao={props.acaoBotao}/>
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