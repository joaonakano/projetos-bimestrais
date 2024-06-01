import './style.css'

export default function Botao({ nome, acao }) {
    return (
        <button type="submit" className="btn" onClick={acao}>
            {nome}
        </button>
    );
}