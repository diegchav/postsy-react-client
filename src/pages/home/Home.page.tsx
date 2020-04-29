import React, { useState, useEffect } from 'react'

import PostService from '../../services/post.service'

import PostList from '../../components/post-list/PostList.component'

const HomePage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const allPosts = await PostService.getAll()
                setPosts(allPosts)
            } catch (err) {
                console.error(err)
            }
        }
        getPosts()
    }, [])

    return (
        <PostList posts={posts} />
    )
}

export default HomePage