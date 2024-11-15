import { useState } from "react"
import "./style.css"

import ConfirmationModal from '../../Modal/Confirmation/Confirmation'

export default function RemoveButton({ handleRemoveOrder}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
        <>
            {isModalOpen ?
                <ConfirmationModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={() => {
                        handleRemoveOrder()
                        setIsModalOpen(false)
                    }}
                    message="Deseja confirmar a operação?"
                />
                : null
            }
            <span onClick={() => setIsModalOpen(true)}>X</span>
        </>        
    )
}