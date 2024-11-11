import "./style.css"
import { Link } from 'react-router-dom'

export default function UpdateButton(order) {

    return(
        <>
            <Link className="update-button" to={`/update/${order.id}`}>Editar Pedido</Link>
        </>
    )
}