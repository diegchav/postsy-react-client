import React from 'react'

import Post from '../post/Post.component'

import PostListContainer from './PostList.styles'

interface PostListProps {
    posts: Array<any>
}

const PostList = ({ posts }: PostListProps) => (
    <PostListContainer>
        {posts.map((post: any) => <Post key={post._id} post={post} />)}
    </PostListContainer>
)

export default PostList