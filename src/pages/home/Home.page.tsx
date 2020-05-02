import React, { useState, useEffect } from 'react'

import PostService from '../../services/post.service'

import CreatePostModal from '../../components/create-post-modal/CreatePostModal.component'
import DeletePostModal from '../../components/delete-post-modal/DeletePostModal.component'
import CreatePostButton from '../../components/create-post-button/CreatePostButton.component'
import PostList from '../../components/post-list/PostList.component'

import HomePageContainer from './Home.styles'

const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [postToDelete, setPostToDelete] = useState('')

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

    const handleOpenCreatePostModal = () => {
        setIsCreateModalOpen(true)
    }

    const handleCloseCreatePostModal = () => {
        setIsCreateModalOpen(false)
    }

    const handleCreatePost = async (postText: string) => {
        try {
            await PostService.create(postText)
            const allPosts = await PostService.getAll()
            setPosts(allPosts)
            setIsCreateModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    const handleOpenDeletePostModal = (_id: string) => {
        setPostToDelete(_id)
        setIsDeleteModalOpen(true)
    }

    const handleCloseDeletePostModal = () => {
        setPostToDelete('')
        setIsDeleteModalOpen(false)
    }

    const handleDeletePost = async () => {
        try {
            console.log(postToDelete)
            await PostService.delete(postToDelete)
            setPostToDelete('')
            const allPosts = await PostService.getAll()
            setPosts(allPosts)
            setIsDeleteModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        {
            isCreateModalOpen &&
            <CreatePostModal
                onClose={handleCloseCreatePostModal}
                onCreate={handleCreatePost} />
        }
        {
            isDeleteModalOpen &&
            <DeletePostModal
                onClose={handleCloseDeletePostModal}
                onDelete={handleDeletePost} />
        }
        <HomePageContainer>
            <CreatePostButton onClick={handleOpenCreatePostModal} />
            <PostList posts={posts} onDeletePost={handleOpenDeletePostModal} />
        </HomePageContainer>
        </>
    )
}

export default HomePage