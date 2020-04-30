import React, { useState, useEffect } from 'react'

import PostService from '../../services/post.service'

import CreatePostModal from '../../components/create-post-modal/CreatePostModal.component'
import CreatePostButton from '../../components/create-post-button/CreatePostButton.component'
import PostList from '../../components/post-list/PostList.component'

import HomePageContainer from './Home.styles'

const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

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

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleCreatePost = async (postText: string) => {
        try {
            await PostService.create(postText)
            const allPosts = await PostService.getAll()
            setPosts(allPosts)
            setIsModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        {
            isModalOpen &&
            <CreatePostModal
                onClose={handleCloseModal}
                onCreate={handleCreatePost} />
        }
        <HomePageContainer>
            <CreatePostButton onClick={handleOpenModal} />
            <PostList posts={posts} />
        </HomePageContainer>
        </>
    )
}

export default HomePage