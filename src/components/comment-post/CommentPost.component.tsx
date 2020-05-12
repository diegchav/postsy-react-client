import React, { useState } from 'react'

import CommentPostContainer from './CommentPost.styles'

interface CommentPostProps {
    onComment: Function
}

const CommentPost = ({ onComment }: CommentPostProps) => {
    const [text, setText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setText(value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onComment(text)
    }

    return (
        <CommentPostContainer>
            <textarea rows={4} value={text} onChange={handleChange} autoFocus />
            <button onClick={handleClick}>Comment</button>
        </CommentPostContainer>
    )
}

export default CommentPost