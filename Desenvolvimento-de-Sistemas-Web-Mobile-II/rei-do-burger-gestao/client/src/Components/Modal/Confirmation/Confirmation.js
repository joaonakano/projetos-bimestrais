// ConfirmationModal.js
import React from 'react';
import './style.css'; // Optional: for styling

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
        <div className="modal-content">
            <h2>Confirmação</h2>
            <p>{message}</p>
            <div className="modal-actions">
                <button onClick={onConfirm}>Confirmar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
        </div>
    );
};

export default ConfirmationModal;