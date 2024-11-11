import "./style.css"
import ConfirmationModal from '../../Modal/Confirmation/Confirmation';
import { useState } from 'react'
import axios from 'axios'

export default function RemoveButton({ id, getOrdersList, updateOrdersList }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const orderID = id
    const ordersList = getOrdersList()

    function sendDeleteRequest() {
        axios.delete(`http://localhost:8000/api/delete/${orderID}`)
            .then(res => console.log(res))
    }

    function handleRemoveOrder() {
        sendDeleteRequest()
        const newOrdersList = ordersList.filter(item => item.documentID !== orderID)
        updateOrdersList(newOrdersList)
        setIsModalOpen(false)
    }

    return(
        <>
            {isModalOpen?
                <ConfirmationModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleRemoveOrder}
                    message="Deseja confirmar a operação?"
                />
                : null
            }
            <span onClick={() => setIsModalOpen(true)}>X</span>
        </>        
    )
}