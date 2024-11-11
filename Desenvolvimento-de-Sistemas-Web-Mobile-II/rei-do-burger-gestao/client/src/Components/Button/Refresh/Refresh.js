import "./style.css"

export default function RefreshButton({ handleRefresh }) {
    return(
        <>
            <button className="refresh-button" onClick={handleRefresh}>Atualizar</button>
        </>
    )
}