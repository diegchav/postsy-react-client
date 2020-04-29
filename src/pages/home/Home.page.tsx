import React, { useState, useEffect } from 'react'

import PostService from '../../services/post.service'

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
        <div>
            {posts.map((post: any) => (
                <p key={post._id}>{post.text}</p>
            ))}
        </div>
    )
}

export default HomePage