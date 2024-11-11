import "./style.css"

export default function RefreshButton({ handleRefresh }) {
    return(
        <>
            <button onClick={handleRefresh}>Atualizar</button>
        </>
    )
}