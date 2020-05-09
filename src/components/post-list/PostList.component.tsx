import React, { useEffect, useRef } from 'react'

import PostItem from '../post-item/PostItem.component'

import PostListContainer from './PostList.styles'

interface PostListProps {
    posts: Array<any>,
    onDeletePost: Function
}

const PostList = ({ posts, onDeletePost }: PostListProps) => {
    const refContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const { current } = refContainer
        current?.scrollTo(0, 0)
    }, [posts])

    return (
        <PostListContainer ref={refContainer}>
            {posts.map((post: any) => <PostItem key={post._id} item={post} onDelete={onDeletePost} />)}
        </PostListContainer>
    )
}

export default PostList