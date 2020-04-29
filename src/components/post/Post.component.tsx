import React from 'react'

import PostContainer from './Post.styles'

interface PostProps {
    post: any
}

const Post = ({ post }: PostProps) => {
    const createdAt = 
        `${new Date(post.createdAt).toLocaleTimeString()} ${new Date(post.createdAt).toLocaleDateString()}`
    return (
        <PostContainer>
            <p className="author">{post.user.username}</p>
            <p className="timestamp">{createdAt}</p>
            <p className="text">{post.text}</p>
        </PostContainer>
    )
}

export default Post