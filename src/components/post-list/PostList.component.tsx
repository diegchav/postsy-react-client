import React from 'react'

import Post from '../post/Post.component'

import PostListContainer from './PostList.styles'

interface PostListProps {
    posts: Array<any>,
    onDeletePost: Function
}

const PostList = ({ posts, onDeletePost }: PostListProps) => (
    <PostListContainer>
        {posts.map((post: any) => <Post key={post._id} post={post} onDelete={onDeletePost} />)}
    </PostListContainer>
)

export default PostList