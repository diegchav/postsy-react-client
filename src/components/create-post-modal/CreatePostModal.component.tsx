import React, { useState } from 'react'

import CreatePostModalContainer from './CreatePostModal.styles'

interface CreatePostModalProps {
    onClose: Function,
    onCreate: Function
}

const CreatePostModal = ({ onClose, onCreate }: CreatePostModalProps) => {
    const [postText, setPostText] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setPostText(value)
    }

    const handleCreate = () => {
        onCreate(postText)
    }

    return (
        <CreatePostModalContainer>
            <div className="modal-box">
                <h4>Create Post</h4>
                <textarea placeholder="Enter post text here" value={postText} onChange={handleChange} />
                <div className="actions">
                    <button className="cancel" onClick={() => onClose()}>Cancel</button>
                    <button className="create" onClick={handleCreate}>Create</button>
                </div>
            </div>
        </CreatePostModalContainer>
    )
}

export default CreatePostModal