import React from 'react'

import DeletePostModalContainer from './DeletePostModal.styles'

interface DeletePostModalProps {
    onClose: Function,
    onDelete: Function
}

const DeletePostModal = ({ onClose, onDelete }: DeletePostModalProps) => (
    <DeletePostModalContainer>
        <div className="modal-box">
            <p>Are you sure you want to delete?</p>
            <div className="actions">
                <button onClick={() => onClose()}>Cancel</button>
                <button className="delete" onClick={() => onDelete()}>Delete</button>
            </div>
        </div>
    </DeletePostModalContainer>
)

export default DeletePostModal