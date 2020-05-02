import React from 'react'

import PostContainer from './Post.styles'

interface PostProps {
    post: any,
    onDelete: Function
}

const Post = ({ post, onDelete }: PostProps) => {
    const createdAt = 
        `${new Date(post.createdAt).toLocaleTimeString()} ${new Date(post.createdAt).toLocaleDateString()}`

    const handleDelete = () => {
        const { _id } = post
        onDelete(_id)
    }

    return (
        <PostContainer>
            <p className="author">{post.user.username}</p>
            <p className="timestamp">{createdAt}</p>
            <p className="text">{post.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </PostContainer>
    )
}

export default Post