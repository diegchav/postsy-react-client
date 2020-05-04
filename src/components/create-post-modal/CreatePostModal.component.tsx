import React, { useState } from 'react'

import CreatePostModalContainer from './CreatePostModal.styles'

interface CreatePostModalProps {
    onClose: Function,
    onCreate: Function
}

const CreatePostModal = ({ onClose, onCreate }: CreatePostModalProps) => {
    const [postText, setPostText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageFile, setImageFile] = useState<File | null>(null)

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setPostText(value)
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files
        if (fileList && fileList.length > 0) {
            const file = fileList[0]
            const imageUrl = window.URL.createObjectURL(file)
            setImageFile(file)
            setImageUrl(imageUrl)
        }
    }

    const handleCreate = () => {
        onCreate(postText, imageFile)
    }

    return (
        <CreatePostModalContainer>
            <div className="modal-box">
                <h4>Create Post</h4>
                <textarea placeholder="Enter post text here" value={postText} onChange={handleTextChange} />
                <input type="file" onChange={handleFileChange} />
                {imageUrl && <img src={imageUrl} alt="post" />}
                <div className="actions">
                    <button onClick={() => onClose()}>Cancel</button>
                    <button className="create" onClick={handleCreate}>Create</button>
                </div>
            </div>
        </CreatePostModalContainer>
    )
}

export default CreatePostModal