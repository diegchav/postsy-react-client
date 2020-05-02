import React from 'react'

import PostContainer from './Post.styles'

interface PostProps {
    post: any,
    onDelete: Function
}

const Post = ({ post, onDelete }: PostProps) => {
    const imageNameIndex = post.imageUrl.split('/') + 1
    const imageName = post.imageUrl.substr(imageNameIndex)
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
            {imageName && <img src={post.imageUrl} alt={imageName} />}
            <button onClick={handleDelete}>Delete</button>
        </PostContainer>
    )
}

export default Post