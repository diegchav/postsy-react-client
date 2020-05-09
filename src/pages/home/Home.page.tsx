import React, { useState, useEffect } from 'react'

import PostService from '../../services/post.service'

import CreatePostModal from '../../components/create-post-modal/CreatePostModal.component'
import DeletePostModal from '../../components/delete-post-modal/DeletePostModal.component'
import CreatePostButton from '../../components/create-post-button/CreatePostButton.component'
import PostList from '../../components/post-list/PostList.component'

import withSpinner from '../../hoc/with-spinner'

import HomePageContainer from './Home.styles'

const PostListWithSpinner = withSpinner(PostList)

const HomePage = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [postToDelete, setPostToDelete] = useState('')

    useEffect(() => {
        const getPosts = async () => {
            try {
                const allPosts = await PostService.getAll()
                setPosts(allPosts)
                setIsLoading(false)
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

    const handleCreatePost = async (postText: string, postImageFile?: File) => {
        try {
            await PostService.create(postText, postImageFile)
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
            await PostService.delete(postToDelete)
            const allPosts = posts.filter((post: any) => post._id !== postToDelete)
            setPosts(allPosts)
            setPostToDelete('')
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
            <PostListWithSpinner isLoading={isLoading} posts={posts} onDeletePost={handleOpenDeletePostModal} />
        </HomePageContainer>
        </>
    )
}

export default HomePage